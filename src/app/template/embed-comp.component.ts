import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';


@Component({
  selector: 'embed-comp',
  templateUrl: './embed-comp.component.html'
})
export class EmbedCompComponent{
  @Input()
  inputData: any;

  @ViewChild('dmroom', { read: ViewContainerRef }) dmRoom: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(){
    let com = this.cfr.resolveComponentFactory(this.inputData.content);
    this.dmRoom.createComponent(com);
  }
}