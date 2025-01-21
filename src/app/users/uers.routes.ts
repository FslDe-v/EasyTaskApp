import { ResolveFn, Routes } from '@angular/router';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../tasks/new-task/new-task.component';
import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  // Lazy-load service by rapping the users' routes in path/route's children that provides service
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        // Redirecting to domain/user/userId/tasks
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
        // prefix: Matches the route if the beginning of the URL matches the path specified in the route.
        // full: Matches the route only if the URL exactly matches the path specified in the route.
      },
      {
        // We could apply lazy-loading here: We only load the component if we select user
        path: 'tasks', // domain/user/userId/tasks
        component: TasksComponent,
        // When this ROUTE here is activated. Angular will trigger the loadComponent function, when this route is activated
        // loadComponent: () =>
        //   import('../tasks/tasks.component').then((mod) => mod.TasksComponent),
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks, // Since resolver re-execute when route changes not queries by default. Therefore add runGuardsAndResolvers
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
