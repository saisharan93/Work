System.register(["./api", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var api_1, core_1, ExerciseOne;
    return {
        setters: [
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ExerciseOne = (function () {
                function ExerciseOne(_api) {
                    this._api = _api;
                    this.data = { city: '', state: '' };
                    this.zip = 23057;
                }
                ExerciseOne.prototype.ngOnInit = function () {
                    var _this = this;
                    this.timer = setInterval(function () {
                        _this.zip++;
                        _this._api.getCityState('' + _this.zip)
                            .subscribe(function (val) { _this.data = val; });
                    }, 2500);
                };
                ExerciseOne.prototype.ngOnDestroy = function () {
                    clearInterval(this.timer);
                };
                ExerciseOne = __decorate([
                    core_1.Component({
                        selector: '[exercise-one]',
                        template: "\n        <h2>exercise one - writing service and rest api calls</h2>\n\n        <ul>\n            <li>update the Api class getCityState function to call below GET url thorugh Angular http client and return\n                the observable with data after mapping the data to IApiResponse inerface object.\n            </li>\n            <li>ex: use https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=12345 url for HTTP GET\n                api. (12345 should be replace by passed zipcode parameter)\n            </li>\n            <li>when city/state api call returns valid result, cache the result in applicaiton session so next call to\n                same url will not be invoked by angular.\n            </li>\n            <li>cache solution should be O(1) complexity based solution not O(n). (dont use browser storage or cookies,\n                use vanilla js solution)\n            </li>\n        </ul>\n        <div>\n            Every second the zip lookup changes :\n            <br><br>\n            <span>Zip {{zip}} => {{data.city}}, {{data.state}}</span>\n        </div>\n    "
                    }),
                    __metadata("design:paramtypes", [api_1.Api])
                ], ExerciseOne);
                return ExerciseOne;
            }());
            exports_1("ExerciseOne", ExerciseOne);
        }
    };
});
//# sourceMappingURL=exercise.one.js.map