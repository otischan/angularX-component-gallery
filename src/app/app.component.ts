import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { PrettyButtonComponent } from "./common/pretty-button.component"
import { CountService } from './common/count.service';

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
  count:number;

  constructor(public router: Router,
    public appservice: AppService,
    private countClickService:CountService) {
    this.masterName = this.appservice.masterName;
  }

  ngOnInit() {
    
  }

  routeHomeClicked(){
    this.router.navigate([""]);
  }
  routeFatherClicked() {
    this.router.navigate(["settings/"]);
  }
  routeChildClicked() {
    this.router.navigate(["settings/otis/"]);
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
