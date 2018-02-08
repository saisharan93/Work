import {Directive} from "@angular/core";
import {NgControl} from "@angular/forms";

@Directive({
    selector: '[formControl][ssn]',
    host: {
        '(keydown.backspace)': 'onInputChange($event.target.value, true)',
        '(ngModelChange)': 'onInputChange($event)'
    }
})

export class SsnMask {
    constructor(public control: NgControl) {}

    onInputChange(input : any, backspace : any) {
        let finalValue = input.replace(/-/g, '');
        if (backspace) {
            finalValue = finalValue.substring(0, finalValue.length);
        }

        if (finalValue.length == 0) { finalValue = '';
        } else if (finalValue.length <= 3) {
            finalValue = finalValue.replace(/^(\d{0,3})/, '$1');
        } else if (finalValue.length <= 5) {
            finalValue = finalValue.replace(/^(\d{0,3})(\d{0,2})/, '$1-$2');
        } else {
            finalValue = finalValue.replace(/^(\d{0,3})(\d{0,2})(\d{0,4})/, '$1-$2-$3');
        }
        this.control.valueAccessor.writeValue(finalValue);
    }
}