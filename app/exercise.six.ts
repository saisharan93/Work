import {Component, Input, Pipe} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: '[exercise-six]',
  template: `
      <h2>exercise six - custom input control and npm scripts</h2>
      <ul>
          <li>update the angular route to show this component for exercise-six route and also update the express server
              script to handle /exercise-  url.
              <ul>
                  <li>update top navigation bar to include exercise-six navigation link.</li>
              </ul>
          </li>

          <li>create custom input control to handle radio button group.
              <ul>
                  <li>it should support ngModel binding like below and set / get model value.</li>
                  <li>allow using input called items to give array of values, and given control should show radio
                      buttons for the given array values.
                  </li>
                  <li>
                      <code>
                          &lt;radio-group [(ngModel)]="selectedState" [items]="states"&gt;&lt;/radio-group&gt;
                      </code>
                  </li>
              </ul>
          </li>
      </ul>
      <form [formGroup]="formular" (ngSubmit)="submit(formular.value)">
          <radio-group [items]="states" 
                       [formControl]="formular.controls['myState']"
                       [(ngModel)]="selectedState"
          ></radio-group>
          <button class="btn btn-primary">Submit me</button>
      </form>
        <br><br>
        <b> selectedState is {{selectedState}}</b>
     <br/>

  `
})

export class ExerciseSix {
  states: any = ['va', 'ca', 'ky'];
  selectedState = 'ky';
  formular: FormGroup;

    constructor(formbuilder : FormBuilder){
        this.formular = formbuilder.group({
            "myState": ["", Validators.required],
        });

        this.formular.controls['myState'].setValue(this.selectedState);
    }

  submit(formData : any){
    console.warn('form content is ', formData);
  }
}