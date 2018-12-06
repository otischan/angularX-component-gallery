import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { PrettyButtonComponent } from "./common/pretty-button.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular X';
  masterName: any;
  input: any;
  formData: any;

  constructor(public router: Router,
    public appservice: AppService) {
    this.masterName = this.appservice.masterName;
  }

  ngOnInit() {
    this.appservice.eventA.subscribe((value: any) => {
      alert(value);
    });
    this.appservice.eventB.subscribe((value: any) => {
      alert(value);
    });
    this.appservice.eventC.subscribe((value: any) => {
      alert(value);
    });
    this.appservice.eventD.subscribe((value: any) => {
      alert(value);
    });
    this.input = "Test input template";
    this.formData = [
      {
        label:"name",
        type: "string",
        content:"OtisChan"
      },
      {
        label:"id",
        type: "string",
        content:"10242193"
      },
      {
        label:"gender",
        type: "string",
        content:"male"
      },
      {
        label:"buttonA",
        type: "component",
        content:PrettyButtonComponent
      },
      {
        label:"buttonB",
        type: "component",
        content:PrettyButtonComponent
      },
      {
        label:"buttonC",
        type: "component",
        content:PrettyButtonComponent
      },
      {
        label:"buttonD",
        type: "component",
        content:PrettyButtonComponent
      }
    ]
  }

  buttonClicked() {
    this.router.navigate(["/settings/otis"]);
  }

  AClicked() {
    this.appservice.eventA.emit("A clicked");
  }
  BClicked() {
    this.appservice.eventB.emit("B clicked");
  }
  CClicked() {
    this.appservice.eventC.emit("C clicked");
  }
  DClicked() {
    this.appservice.eventD.emit("D clicked");
  }
}
