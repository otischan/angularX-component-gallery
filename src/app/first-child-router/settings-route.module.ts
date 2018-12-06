import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from "./first-child.component";
import { ChildCindyComponent } from "./cindy/cindy.component";
import { ChildOtisComponent } from "./otis/otis.component";

export const ROUTES: Routes = [
  {
    path: 'settings',
    children: [
      { path: 'cindy', component: ChildCindyComponent },
      { path: 'otis', component: ChildOtisComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class SettingsModule {}