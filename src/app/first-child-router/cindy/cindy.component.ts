import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PrettyButtonComponent } from '../../common/pretty-button.component';
import { CountService } from '../../common/count.service';

@Component({
  selector: 'child-cindy',
  templateUrl: "./cindy.component.html"
})
export class ChildCindyComponent implements OnInit {
  username: string;
  formData: any;
  subscription: any;
  constructor(private route: ActivatedRoute,
              private countservice: CountService) {
      this.countservice.messageEvent.subscribe();
  }
  ngOnInit() {
    this.username = "Cindy";
    this.formData = [
      {
        label:"test",
        type: "string",
        content:"Cindy Button"
      },
      {
        label:"button Cindy",
        type: "component",
        content:PrettyButtonComponent
      }
    ];
    // alert("FirstChildComponent init");
    this.subscription = this.countservice.messageEvent.subscribe(
      (value:any)=>{
        alert("get message from otis");
      });
  }
  ngOnDestroy(){
    console.warn("Cindy destroy");
    // this.countservice.messageEvent.unsubscribe();
    this.subscription.unsubscribe();
  }
}