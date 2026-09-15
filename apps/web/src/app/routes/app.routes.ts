import { Route } from '@angular/router';
import { authGuard } from '@fe/core';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'stories' },
  {
    path: 'stories',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/stories').then((m) => m.storiesRoutes),
  },
  {
    path: 'media',
    canActivate: [authGuard],
    loadChildren: () => import('@fe/features/media').then((m) => m.mediaRoutes),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/profile').then((m) => m.profileRoutes),
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@fe/features/settings').then((m) => m.settingsRoutes),
  },
  { path: '**', redirectTo: 'stories' },
];
