import { Routes } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes: Routes = [
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent }
];
