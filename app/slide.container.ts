import {Component, Output, ContentChildren, QueryList, EventEmitter} from '@angular/core';
import {Slide, SlideItem} from './slide';

@Component({
    selector: '[slide-container]',
    template: `
        <button 
                (click)="selectSlide(s)"
                style="margin-right:10px;"
                *ngFor="let s of slideItems;">slide {{s.title}}</button>
        <ng-content></ng-content> <!-- Render slides here with transclusion -->
        
  `,
  styles: [
      'display: block;',
      'width: 100%'
  ]
})
export class SlideContainer {
    @Output() slideSelected = new EventEmitter();
    @Output() slideDeselected = new EventEmitter();
    @ContentChildren(Slide) slideItems: QueryList<Slide>; //Binding to transcluded elements

    selectSlide(slide : SlideItem){
        let isSlideCurrentSlide = slide.isSelected;
        if(isSlideCurrentSlide){
            this.slideDeselected.emit(slide); //slide unselect
        }else{
            this.slideSelected.emit(slide); //slide select
        }
    }
}


