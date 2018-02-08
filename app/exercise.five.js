System.register(["@angular/http", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, core_1, ExerciseFive, MemoryPipe;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ExerciseFive = (function () {
                function ExerciseFive(_http) {
                    this._http = _http;
                    this.productArray = ['FUTURE', 'TERMINATED', 'ACTIVE'];
                    this.formatedProducts = [];
                    this.membersList = this._http.get('member.json?' + (new Date()).getTime()).map(function (resp) {
                        return resp.json();
                    });
                    this.formatedProducts = this.productArray.slice().sort(function (a, b) {
                        console.log('sorting done');
                        return (a > b ? 1 : -1); //sorting by comparison
                    }).map(function (product) {
                        var productConcat = product.concat('_PRODCT'); //appending suffix to products.
                        return productConcat;
                    });
                }
                Object.defineProperty(ExerciseFive.prototype, "loggedInMember", {
                    get: function () {
                        return this._http.get('member.json?' + (new Date()).getTime()).map(function (resp) { return resp.json(); });
                    },
                    enumerable: true,
                    configurable: true
                });
                ExerciseFive = __decorate([
                    core_1.Component({
                        selector: '[exercise-five]',
                        template: "\n        <h2>exercise five - vanilla javascript, host binding</h2>\n        <ul>\n            <li>whats wrong with below code. it is binding data coming back from api call but this code is not\n                performance friendly or working properly.\n                <ul>\n                    <li>we just need to show members first name (from api response), fix this code (but do not use any\n                        additional variables or properties)\n                        <br/><code>Hi &#123;&#123;loggedInMember.firstName&#125; &#125; !!!</code>\n                    </li>\n                </ul>\n            </li>\n\n            <li>update ClickGlobal component click function to update the last clicked time only when click on buttons\n                with update-time css class.\n                <ul>\n                    <li>don't create new functions or add click event on buttons.</li>\n                    <li>update the existing click function with your solution.</li>\n                </ul>\n            </li>\n\n            <li>append \"_PRODCT\" string to each array item in productArray. and sort the array in ascending order. do\n                not use for loop or foreach iterators.\n                <ul>\n                    <li>complete this solution by using javascript in-built array functions.</li>\n                </ul>\n            </li>\n        </ul>\n\n        <p>the value bound on the html has to be evaluated every time something \"has changed\" in the app so that if the\n            value of the bound item has changed it will be reflected to the html, thus giving you this magical\n            autoupdating binding. </p>\n\n        <p>Products before : </p>\n        <div *ngFor=\"let product of productArray\"><span>{{product}}</span><br></div>\n        <br>\n        <p>Products after : </p>\n        <div *ngFor=\"let niceProduct of formatedProducts\"><span>{{niceProduct}}</span><br></div>\n\n        <br><br>\n        <p>Members :</p><br>\n        Hi {{(loggedInMember | memoryPipe)?.firstName}}<br><br>\n        \n        <div click-global></div>\n\n    ",
                    }),
                    __metadata("design:paramtypes", [http_1.Http])
                ], ExerciseFive);
                return ExerciseFive;
            }());
            exports_1("ExerciseFive", ExerciseFive);
            MemoryPipe = (function () {
                function MemoryPipe() {
                    this.memory = {};
                    this.subscribed = false;
                }
                MemoryPipe.prototype.transform = function (observable) {
                    var _this = this;
                    if (!this.subscribed) {
                        this.subscribed = true;
                        observable.map(function (res) {
                            _this.memory = res;
                        }).subscribe(); //first time make the query
                    }
                    else {
                        return this.memory; //nth time, return memory
                    }
                };
                MemoryPipe = __decorate([
                    core_1.Pipe({
                        name: 'memoryPipe'
                    })
                ], MemoryPipe);
                return MemoryPipe;
            }());
            exports_1("MemoryPipe", MemoryPipe);
        }
    };
});
//# sourceMappingURL=exercise.five.js.map