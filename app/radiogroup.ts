
import {Component, Input} from "@angular/core";
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {ControlValueAccessor} from "@angular/forms";

const noop = () => {
};

@Component({
    selector: 'radio-group',
    template: `
        <div>
            <ng-content></ng-content>
            <span *ngFor="let item of items">
                <label>
                    <input type="radio" name="test" value="{{item}}" (blur)="onBlur()" [(ngModel)]="value" > <!-- (click)="value(item)" [(ngModel)]="selectedRadio"-->
                        {{item}}
                </label>
                <br>
            </span>
        </div>
  `,
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: CustomRadioGroup, multi: true}
    ],
})

export class CustomRadioGroup implements ControlValueAccessor{
    //The internal data model
    private innerValue: string = '';
    @Input() items: [string];

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //Communication from outside to inside.
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}