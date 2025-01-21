import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { NewTaskComponent } from '../../tasks/new-task/new-task.component';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  message = input.required<string>();

  // ngOnInit(): void { // Extract data
  //   this.activatedRoute.data.subscribe({
  //     next: (data) => console.log(data),
  //   });
  // }

  // Method 1
  // userId = input.required<string>();
  // userName = computed(
  //   () => this.userService.users.find((u) => u.id === this.userId())?.name
  // );

  // Method 2
  // private destroyRef = inject(DestroyRef);
  // userName = input.required<string>();
  // ngOnInit(): void {
  //   console.log('[Message Data]: ' + this.message());
  //   console.log(this.activatedRoute.snapshot);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     // /:<value>
  //     next: (paraMap) => {
  //       this.userName =
  //         this.userService.users.find((u) => u.id === paraMap.get('userId'))
  //           ?.name || '';
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  // Method 3
  userName = input.required<string>();
}

// Resolving user name in app.route
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
