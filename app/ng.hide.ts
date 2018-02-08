import { Directive, HostBinding, Input } from '@angular/core';
import {CommonModule} from "@angular/common";

@Directive({
    selector: '[ngHide]'
})
export class NgHide {
    @Input() @HostBinding('class.ngHide') ngHide : boolean;
}
