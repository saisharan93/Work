import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Api, IApiResponse} from "./api";
import {State} from "./exercise.three";


const noop = () => {
};

@Component({
    selector: 'address',
    template: `
        <form #form="ngForm">


            <button type="button" class="btn" [ngClass]="{'btn-primary' : form.valid}" [disabled]="!form.valid"
                    (click)="updateAddress()">Get current address
            </button>
            <br><br>
            <span [hidden]="!innerValue">{{innerValue}}</span>
            <br><br>

            <span>street</span><input required name="streetNumber" [(ngModel)]="data.streetNumber"
                                      class="form-control"/><br>
            <span>zip</span><input required name="zip" [(ngModel)]="data.zip" class="form-control" maxlength="5"
                                   minlength="5"
                                   (blur)="(data.zip.length === 5) && autocomplete(data.zip)"/>
            <br>
            <span>city</span><input required name="city" [(ngModel)]="data.city" class="form-control">
            <br>

            <span>state</span>
            <select [(ngModel)]="data.myState" required name="state" class="form-control">
                <option *ngFor="let state of states;" [ngValue]="state">{{state.label}}</option>
            </select><br><br>
        </form>
    `,
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: Address, multi: true}
    ]
})

export class Address implements ControlValueAccessor, OnInit{
    @Input() defaultState : State;
    @Input() states : [State];

    private innerValue: any = '';
    private data: any = { state : null, city: null, zip : null, streetNumber: null};

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    updateAddress(){
        this.innerValue = this.data.streetNumber  + ', ' +
            this.data.city + ', ' +
            this.data.myState.label + ' ' +
            this.data.zip;
        this.onChangeCallback(this.innerValue);
    }

    constructor(private api : Api){ }

    ngOnInit(){
        this.data.myState = this.states.filter(state => state.value === this.defaultState.value)[0];
    }

    autocomplete(zip : string){

        this.api.getCityState(zip)
            .subscribe((response : IApiResponse) => {
                let matchingResult = false;

                this.states.forEach(function(state : any){
                    if(state.label == response.state){
                        matchingResult = state;
                        this.data.myState = matchingResult;
                    }
                });
                if(!matchingResult){ //add new state to dropdown. we did not find it
                    let createdState = { label : response.state, value : response.state.substr(0,2).toUpperCase()}; //create a new state
                    this.data.myState = createdState; //select state
                    this.states.push(createdState);
                }
                this.data.city = response.city;
            });
    }

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
            this.data = {};
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