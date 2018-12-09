import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PrettyButtonComponent } from '../../common/pretty-button.component';

@Component({
  selector: 'otis-cindy',
  templateUrl: "./otis.component.html"
})
export class ChildOtisComponent implements OnInit {
  username: string;
  formData: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.username = "OtisChan";
    this.formData = [
      {
        label:"test",
        type: "string",
        content:"Otis Button"
      },
      {
        label:"button Otis",
        type: "component",
        content:PrettyButtonComponent
      }
    ];
    // alert("FirstChildComponent init");
  }
  ngOnDestroy(){
    // alert("FirstChildComponent destroy");
    console.warn("Otis destroy");
  }
}