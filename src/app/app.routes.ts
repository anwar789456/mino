import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./anwar/user/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: () => import('./anwar/user/user.routes').then(m => m.USER_ROUTES)
      },
      {
        path: 'courses',
        loadChildren: () => import('./ayoub/course/course.routes').then(m => m.COURSE_ROUTES)
      },
      {
        path: 'friends',
        loadChildren: () => import('./anwar/friends/friends.routes').then(m => m.FRIENDS_ROUTES)
      },
      {
        path: 'sessions',
        loadChildren: () => import('./aziz/sessionreservation/sessionreservation.routes').then(m => m.SESSION_ROUTES)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./alaa/quiz/quiz.routes').then(m => m.QUIZ_ROUTES)
      },
      {
        path: 'forums',
        loadChildren: () => import('./hani/forum/forum.routes').then(m => m.FORUM_ROUTES)
      },
      {
        path: 'events',
        loadChildren: () => import('./mahmoud/event/event.routes').then(m => m.EVENT_ROUTES)
      },
      {
        path: 'profile',
        loadChildren: () => import('./anwar/user/user.routes').then(m => m.USER_ROUTES)
      }
    ]
  },
  { path: '**', redirectTo: 'courses' }
];
