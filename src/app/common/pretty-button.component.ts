import { Component, Input } from '@angular/core';
import { CountService } from "./count.service";

@Component({
  selector: 'pretty-button',
  templateUrl: './pretty-button.component.html'
})
export class PrettyButtonComponent {
    buttonName:any;
  constructor(private countClickService:CountService) {
  }

  buttonClicked(){
      this.countClickService.countEvent.emit("clicked");
  }
}