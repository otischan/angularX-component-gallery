import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from "./app.route";
// import { FirstChildComponent } from "./first-child-router/first-child.component";
import { AppService } from "./app.service"
// import { InputTemplate } from "./template/input-template";
// import { FormTemplate } from "./template/form-template"
// import { FormsModule } from '@angular/forms';
// import { PrettyButtonComponent } from "./common/pretty-button.component";
// import { EmbedCompComponent } from "./template/embed-comp.component";
import { CountService } from "./common/count.service";
import { SettingsModule } from "./first-child-router/settings-route.module"


@NgModule({
  declarations: [
    AppComponent,
    // FirstChildComponent,
    // InputTemplate,
    // FormTemplate,
    // PrettyButtonComponent,
    // EmbedCompComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    SettingsModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [
    // PrettyButtonComponent,
    // EmbedCompComponent
  ],
  providers: [
    AppService,
    CountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
