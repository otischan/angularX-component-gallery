import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'first-child',
  templateUrl: "./first-child.component.html"
})
export class FirstChildComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.username = "OtisChan";
    this.route.params
      .subscribe((params: Params) => {
        this.username = params['username'];
      })
  }
}