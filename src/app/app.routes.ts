import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  UserTasksComponent,
  resolveTitle,
  resolveUserName,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shoulGet = Math.random();
  if (true) return true;
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    // Initial page route
    path: '',
    component: NoTaskComponent,
    title: 'No task selected here', // Set static title
  },
  // Dynamic route
  {
    path: 'users/:userId', // domain/user/userId
    component: UserTasksComponent,
    // Lazy load the entire groupe
    loadChildren: () => import('./users/uers.routes').then((mod) => mod.routes),
    //canMatch: [dummyCanMatch], // Control access (Route Guard) to a route and its chilren
    data: {
      // You shoul enable  withComponentInputBinding()
      message: 'Hey!', // Static data
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle, // Set dynamic title
  },
  {
    path: '**', // Gets activated when no other path/route is matched
    component: NotFoundComponent,
  },
];
