import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PrettyButtonComponent } from '../common/pretty-button.component';
import { CountService } from '../common/count.service';

@Component({
  selector: 'first-child',
  templateUrl: "./first-child.component.html"
})
export class FirstChildComponent implements OnInit, OnDestroy {
  username: string;
  formData: any;
  count: any;
  constructor(private route: ActivatedRoute,
            private countService: CountService) {}
  ngOnInit() {
    this.username = "OtisChan";
    this.count = 0;
    
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
        label:"buttonA",
        type: "string",
        content:"Below is Button A"
      },
      {
        label:"buttonA",
        type: "component",
        content:PrettyButtonComponent
      },
      {
        label:"buttonB",
        type: "string",
        content:"Below is Button B"
      },
      {
        label:"buttonB",
        type: "component",
        content:PrettyButtonComponent
      }
    ]
    // alert("FirstChildComponent init");
    this.countService.countEvent.subscribe(
      (value:any)=>{
        this.count = this.count + 1;
      });
  }
  ngOnDestroy(){
    // alert("FirstChildComponent destroy");
  }
}