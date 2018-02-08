import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Http, Response} from "@angular/http";

@Injectable()
export class Api {

    private cachedResults : Object;//key value store for the cache

    constructor(private http : Http) {
        this.cachedResults = new Object();
    }

    getCityState(zip: string): Observable<IApiResponse> {

        let cacheDataForZip = this.cachedResults[zip];
        if(cacheDataForZip){ //it was cached
            return Observable.of(cacheDataForZip); //got some cached, send that.
        }else{
            return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=" + zip)
                .map((response) =>  response.json().results[0])
                .map((address) => {
                    if(address && address.address_components && address.address_components[1] && address.address_components[4]){

                        let result = {city : address.address_components[1].long_name, state : address.address_components[4].long_name} as IApiResponse;
                        this.cachedResults[zip] = result; //perist to cache
                        console.log('cache is now', this.cachedResults);
                        return result;
                    }else{
                        console.warn('zip' + zip + ' did not match any city or state');
                        return {city: 'Unknown city', state : 'Unknown state'};
                    }
                });
        }


    }
}

export interface IApiResponse {
    city: string;
    state: string;
}
