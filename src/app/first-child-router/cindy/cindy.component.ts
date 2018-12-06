import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'child-cindy',
  templateUrl: "./cindy.component.html"
})
export class ChildCindyComponent implements OnInit {
  username: string;
  constructor() {}
  ngOnInit() {
      this.username = "Cindy";
  }
}