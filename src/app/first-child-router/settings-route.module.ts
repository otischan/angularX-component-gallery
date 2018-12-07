import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from "./first-child.component";
import { ChildCindyComponent } from "./cindy/cindy.component";
import { ChildOtisComponent } from "./otis/otis.component";
import { FormTemplate } from "../template/form-template";
import { InputTemplate } from "../template/input-template";
import { EmbedCompComponent } from "../template/embed-comp.component";
import { PrettyButtonComponent } from "../common/pretty-button.component";
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    ChildCindyComponent,
    ChildOtisComponent,
    FormTemplate,
    InputTemplate,
    EmbedCompComponent,
    PrettyButtonComponent,
    FirstChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  entryComponents: [
    EmbedCompComponent,
    PrettyButtonComponent
  ]
})
export class SettingsModule {}