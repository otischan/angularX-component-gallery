import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from "./first-child-router/first-child.component";
import { ChildCindyComponent } from "./first-child-router/cindy/cindy.component";
import { ChildOtisComponent } from "./first-child-router/otis/otis.component";


export const ROUTES: Routes = [
  {
    path: 'settings',
    component: FirstChildComponent,
    children: [
      { path: 'cindy', component: ChildCindyComponent },
      { path: 'otis', component: ChildOtisComponent }
    ]
  }
  
];