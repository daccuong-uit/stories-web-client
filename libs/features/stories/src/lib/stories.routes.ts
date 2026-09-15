import { Route } from '@angular/router';
import { StoriesShellComponent } from './components/stories-shell/stories-shell.component';

export const storiesRoutes: Route[] = [
  { path: '', component: StoriesShellComponent },
];