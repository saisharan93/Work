import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Api } from './api';
import {Http} from "@angular/http";

@Component({
    selector: '[exercise-three]',
    template: `
        <h2>exercise three - forms elements, angular inputs/outputs, validators, formatters</h2>
        <ul>
            <li>create form with below controls</li>
            <li>ssn (textbox)</li>
            <li>address component - update address component with below html inputs and functionality
                <ul>
                    <li>street (textbox)</li>
                    <li>zip (textbox)</li>
                    <li>city (textbox)</li>
                    <li>state (dropdown)</li>
                    <li>When valid 5 digit zip code is entered and user focus out from zip code textbox, populate the
                        city and state automatically (using Api getCityState function implemented in exercise one.)
                    </li>
                    <li>set (VA, CA, KY) options in the state dropdown statically.</li>
                    <li>using angular input we should be able to set the VA as the default selected state (when user
                        intially lands to this page).
                    </li>
                    <li>use angular output to send back the selected state from dropdown back to parent component
                        selectedState property. Hint: use angular input/output
                    </li>
                </ul>
            </li>

            <li>create a angular formatter directive to format the ssn like ###-##-####.
                <ul>
                    <li>it should automatically add the dash when user types ssn (if on type not possible you can format
                        on focus out).
                    </li>
                    <li>write a unit test for this formatter to make sure it works properly on any input value. (use
                        exercise.spec.ts file to write your test cases, and you can run the unit tests using navigation
                        link "Run Unit tests")
                    </li>
                    <li>Ex: 123 -> 123
                        12 -> 12
                        1234 -> 123-4
                        12345 -> 123-45
                        123456 -> 123-45-6
                        etc...
                    </li>
                </ul>
            </li>

            <li>create a angular validator to validate the ssn input value is in ###-##-#### format.
                <ul>
                    <li>show validation error messages (below the input in red color) if ssn input is empty or invalid
                        format.
                    </li>
                    <li>validation should only start when user focus out for the first time from the input, after that
                        it will display the validation in realtime.
                    </li>
                    <li>input should contain red color border if invalid.</li>
                </ul>
            </li>

            <li>address component should have public function to return the formatted address in below format.
                <ul>
                    <li>ex: street, city, state zipcode</li>
                </ul>
            </li>

            <li>wrap all input elements inside the html form.
                <ul>
                    <li>add a button to reset the form elements to default values.</li>
                    <li>add another button to submit the form to dummy.json file with below json POST body and show the
                        returned JSON response "successMessage" value in the html below the form.
                        (note ssn doesnt have dashes and address is formatted using previous format function form
                        address component.)
                    </li>
                    <li><code>"ssn": "123456789", "address": "street, city, state zip"</code></li>
                </ul>
            </li>

            <li>OPTIONAL - add a route guard for this route (exercise-three), so that it wont allow user to change the
                route without confirming (use vanilla js confirm window).
                <ul>
                    <li>only show this confirm when form is dirty. (if member reset form input elements this confirm
                        message should not show up)
                    </li>
                </ul>
            </li>
        </ul>

        <!--address-->
        <form [formGroup]="formular" (ngSubmit)="submitForm(formular.value)">
            <div [ngClass]="{red : (formular.controls.ssn.touched && formular.controls.ssn.hasError('required')) || (formular.controls.ssn.touched && formular.controls.ssn.hasError('ssnWrong'))}">
                <span>SSN :</span>
                <input ssn maxlength="11" class="form-control" id="ssn-input" [formControl]="formular.controls.ssn"/><br>
                <div [hidden]="!formular.controls.ssn.touched">
                    <span [hidden]="!formular.controls.ssn.hasError('ssnWrong')" class="red"><b>Invalid SSN format (use: ###-##-###)</b></span><br>
                    <span [hidden]="!(formular.controls.ssn.hasError('required') && formular.controls.ssn.touched)"><b>SSN required</b></span><br>
                </div>
            </div>

            <address [defaultState]="selectedState" [states]="states" [formControl]="formular.controls.address" ></address>

            <span class="green" [hidden]="!result">{{result}}</span><br><br>
            <span class="btn btn-warning" (click)="reset()">reset</span>
            <button class="btn btn-success" [disabled]="!formular.valid">Submit</button>
        </form>

    `
})

export class ExerciseThree{
    formular: FormGroup;
    result: string = '';
    states: [State] = [{label : "Kentucky", value: "KY"}, {label : "Virginia", value: "VA"}, {label : "California", value: "CA"}];
    selectedState: {} = this.states[1];

    constructor(fb: FormBuilder, private api : Api, private http: Http) {
        this.formular = fb.group({
            'ssn': ["", Validators.compose([Validators.required, this.ssnValueValidator]) ],
            'address':["", Validators.required]
        });
    }

    ssnValueValidator(control: FormControl) {
        let ssn = control.value;

        if(ssn.match(/^(\d{3}-?\d{2}-?\d{4})$/)){ //only numbers.
            return null;
        }
        return {
            ssnWrong : true
        };
    }

    reset(){
        this.result = '';
        this.formular.reset({
            address : '',
            ssn : ''
        });
    }

    submitForm(form : any) :void{
        this.http.post('dummy.json',form)
            .subscribe(result => { this.result = result.json().successMessage; })
    }

    canDeactivate() {
        return !this.formular.dirty;
    }
}

export interface State {
    label : string,
    value : string
}