import { Observable } from 'rxjs/Observable';
import { Api, IApiResponse } from './api';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {noUndefined} from "@angular/compiler/src/util";

@Component({
    selector: '[exercise-one]',
    template: `
        <h2>exercise one - writing service and rest api calls</h2>

        <ul>
            <li>update the Api class getCityState function to call below GET url thorugh Angular http client and return
                the observable with data after mapping the data to IApiResponse inerface object.
            </li>
            <li>ex: use https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=12345 url for HTTP GET
                api. (12345 should be replace by passed zipcode parameter)
            </li>
            <li>when city/state api call returns valid result, cache the result in applicaiton session so next call to
                same url will not be invoked by angular.
            </li>
            <li>cache solution should be O(1) complexity based solution not O(n). (dont use browser storage or cookies,
                use vanilla js solution)
            </li>
        </ul>
        <div>
            Every second the zip lookup changes :
            <br><br>
            <span>Zip {{zip}} => {{data.city}}, {{data.state}}</span>
        </div>
    `
})
export class ExerciseOne implements OnInit, OnDestroy {
    data: Object = {city:'', state:''};
    zip: number = 23057;
    timer: number;

    constructor(private _api: Api) { }

    ngOnInit() {
        this.timer = setInterval(()=>{
            this.zip ++;
            this._api.getCityState(''+ this.zip)
                .subscribe(val => { this.data = val; } );
        },2500);
    }

    ngOnDestroy(){
        clearInterval(this.timer);
    }
}
