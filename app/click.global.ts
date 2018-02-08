import { Directive, HostBinding, Input, Component, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: '[click-global]',
    template: `
        last clicked date time: {{date | date:'medium'}}
        <br/>

        <button *ngFor="let btn of [1, 2, 3, 4]" class="update-time btn btn-success">button {{btn}} is working</button>
        <br/>
        <button class="btn btn-default" *ngFor="let btn of [5, 6]">button {{btn}}</button>
        <br/>
        <button class="btn btn-default">single button</button>
        <br/>
        <div style="width: 500px; display: block;height:500px;" tabindex="0">
            <div>
                <button class="update-time btn btn-success">button works!!!</button>
            </div>
        </div>
    `
})
export class ClickGlobal {
    date: string;

    constructor(private _eleRef: ElementRef) { }

    @HostListener('click', ['$event'])
    click(event: any) {
        if(event.toElement.className.indexOf('update-time') !== -1){ //if button has update-time class
            this.date = Date.now().toString();
        }
    }
}
