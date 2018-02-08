import {Component} from '@angular/core';
import {SlideItem} from "./slide";

@Component({
    selector: '[exercise-two]',
    template: `
        <h2>exercise two - transclusion</h2>
        <ul>
            <li>add support to transclude multiple slide components into slide container component.</li>
            <li>update slide container component to show list of buttons correspond to each transcluded slide.</li>
            <ul>
                <li>use ngFor to loop and create button for each slide component available.</li>
                <li>you will need to identify how many tab components are transcluded and create same number of buttons
                    with the title property value of tab component as button text))
                </li>
                <li>on click of each button de-select the current selected component (by executing onDeSelect function
                    in selected component)
                </li>
                <li>and select the corresponding component for clicked button (using onSelected function).</li>
            </ul>
            <li>do not use any jquery or pure js dom manipulation or query functions for above.</li>
        </ul>

        <p>Slides </p>
        <div slide-container (slideDeselected)="onDeSelect($event)" (slideSelected)="onSelect($event)" >
            <div *ngFor="let s of slideDatas;"
                 slide
                 [selected]="s.isSelected"
                 [title]="s.title"></div>
        </div>
    `
})
export class ExerciseTwo {

    private slideDatas = [{
        title: 'one',
        isSelected: false
    },{
        title: 'two',
        isSelected: false
    },{
        title: 'three',
        isSelected: false
    },{
        title: 'four',
        isSelected: false
    },{
        title: 'n',
        isSelected: false
    }];

    onDeSelect(slide : SlideItem){
        slide.isSelected = false;
    }

    onSelect(slideToSelect : SlideItem){
        //deselect any slide which is selected.
        this.slideDatas = this.slideDatas.map(function(s){
            s.isSelected = s.title == slideToSelect.title;
            return s;
        });
    }

    constructor(){
    }
}
