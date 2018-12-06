import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'otis-cindy',
  templateUrl: "./otis.component.html"
})
export class ChildOtisComponent implements OnInit {
  username: string;
  constructor() {}
  ngOnInit() {
      this.username = "OtisChan";
  }
}