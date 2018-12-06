import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from './first-child-router/first-child.component';

export const ROUTES: Routes = [
  {
    path: 'settings',
    loadChildren: './first-child-router/settings-route.module#SettingsModule'
  }
];