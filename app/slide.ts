import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: '[slide]',
    template: `        
        <div class="slide" [ngClass]="{red : selected}">Hi this is slide <b>{{title}}</b> and I'm <b>{{(!selected ? 'not' : '')}} selected</b></div>
    `
})
export class Slide {
    @Input() title: String;
    @Input() selected: String;
}

export interface SlideItem {
    title : string,
    isSelected : boolean
}