import { Component, Input } from '@angular/core';


@Component({
  selector: 'input-template',
  templateUrl: './input-template.html'
})
export class InputTemplate {
    @Input()
  inputData:any;
  constructor(){
  }
}