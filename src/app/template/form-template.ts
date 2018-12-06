import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';


@Component({
  selector: 'form-template',
  templateUrl: './form-template.html'
})
export class FormTemplate implements OnInit{
  @Input()
  formData: any;

  
  @ViewChild('dmroom', { read: ViewContainerRef }) dmRoom: ViewContainerRef;
  compsSection = [];

  ngOnInit(){
    
  }

  // currentIndex: number = -1;
  // items = [];
  // comps = [];

  // constructor(private cfr: ComponentFactoryResolver) {
  //   for(let t of this.formData){
  //     if(t.type == "component"){
  //     }
  //   }
  // }
  // ngOnInit(){
  //   for(let item of this.formData){
  //     if(item.type=="component"){
  //       let com = this.cfr.resolveComponentFactory(item.content);
  //       this.dmRoom.createComponent(com);
  //     }
  //   }
  //   for(let comp of this.comps){
  //     let com = this.cfr.resolveComponentFactory(comp);
  //     this.dmRoom.createComponent(com);
  //   }
  // }
}