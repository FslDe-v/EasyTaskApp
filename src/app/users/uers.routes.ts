import { Routes } from '@angular/router';
import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    // Redirecting to domain/user/userId/tasks
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix',
    // prefix: Matches the route if the beginning of the URL matches the path specified in the route.
    // full: Matches the route only if the URL exactly matches the path specified in the route.
  },
  {
    path: 'tasks', // domain/user/userId/tasks
    component: TasksComponent,
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
];
