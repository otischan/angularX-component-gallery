import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CountService{
    @Output()
    countEvent:any = new EventEmitter();

    @Output()
    messageEvent:any = new EventEmitter();
}