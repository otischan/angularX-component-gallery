import { Component, Input } from '@angular/core';

@Component({
  selector: 'pretty-button',
  templateUrl: './pretty-button.component.html'
})
export class PrettyButtonComponent {
    buttonName:any;
  constructor() {
  }

  buttonClicked(){
      alert("Pretty Button Clicked.");
  }
}