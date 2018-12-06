import { Component, Injectable, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
    @Input()
    masterName:string = "Otis Chan";

    @Input()
    eventA:any = new EventEmitter();

    @Input()
    eventB:any = new EventEmitter();

    @Input()
    eventC:any = new EventEmitter();

    @Input()
    eventD:any = new EventEmitter();

}