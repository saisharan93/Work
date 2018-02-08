import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import {ChangeDetectionStrategy, Component, Pipe} from '@angular/core';

@Component({
    selector: '[exercise-five]',
    template: `
        <h2>exercise five - vanilla javascript, host binding</h2>
        <ul>
            <li>whats wrong with below code. it is binding data coming back from api call but this code is not
                performance friendly or working properly.
                <ul>
                    <li>we just need to show members first name (from api response), fix this code (but do not use any
                        additional variables or properties)
                        <br/><code>Hi &#123;&#123;loggedInMember.firstName&#125; &#125; !!!</code>
                    </li>
                </ul>
            </li>

            <li>update ClickGlobal component click function to update the last clicked time only when click on buttons
                with update-time css class.
                <ul>
                    <li>don't create new functions or add click event on buttons.</li>
                    <li>update the existing click function with your solution.</li>
                </ul>
            </li>

            <li>append "_PRODCT" string to each array item in productArray. and sort the array in ascending order. do
                not use for loop or foreach iterators.
                <ul>
                    <li>complete this solution by using javascript in-built array functions.</li>
                </ul>
            </li>
        </ul>

        <p>the value bound on the html has to be evaluated every time something "has changed" in the app so that if the
            value of the bound item has changed it will be reflected to the html, thus giving you this magical
            autoupdating binding. </p>

        <p>Products before : </p>
        <div *ngFor="let product of productArray"><span>{{product}}</span><br></div>
        <br>
        <p>Products after : </p>
        <div *ngFor="let niceProduct of formatedProducts"><span>{{niceProduct}}</span><br></div>

        <br><br>
        <p>Members :</p><br>
        Hi {{(loggedInMember | memoryPipe)?.firstName}}<br><br>
        
        <div click-global></div>

    `,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseFive {
    productArray: Array<string> = ['FUTURE', 'TERMINATED', 'ACTIVE'];
    formatedProducts: Array<string> = [];
    membersList: Observable<any>;

    constructor(private _http: Http) {
        this.membersList = this._http.get('member.json?' + (new Date()).getTime()).map((resp) => {
            return resp.json();
        });

        this.formatedProducts = this.productArray.slice().sort(function (a, b) {
            console.log('sorting done');
            return (a > b ? 1 : -1); //sorting by comparison
        }).map(function (product) {
            let productConcat = product.concat('_PRODCT'); //appending suffix to products.
            return productConcat
        });
    }

    get loggedInMember(): Observable<any> {
        return this._http.get('member.json?' + (new Date()).getTime()).map((resp) => { return resp.json(); });
    }

}

@Pipe({
    name: 'memoryPipe'
})

export class MemoryPipe{
    private memory : any = {};
    private subscribed : boolean = false;

    transform(observable: Observable<any>): any {

        if(!this.subscribed){
            this.subscribed = true;
            observable.map(res => {
                    this.memory = res;
            }).subscribe(); //first time make the query
        }else{
            return this.memory; //nth time, return memory
        }
    }
}