System.register(["@angular/core", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/observable/of", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, Observable_1, http_1, Api;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            Api = (function () {
                function Api(http) {
                    this.http = http;
                    this.cachedResults = new Object();
                }
                Api.prototype.getCityState = function (zip) {
                    var _this = this;
                    var cacheDataForZip = this.cachedResults[zip];
                    if (cacheDataForZip) {
                        return Observable_1.Observable.of(cacheDataForZip); //got some cached, send that.
                    }
                    else {
                        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=" + zip)
                            .map(function (response) { return response.json().results[0]; })
                            .map(function (address) {
                            if (address && address.address_components && address.address_components[1] && address.address_components[4]) {
                                var result = { city: address.address_components[1].long_name, state: address.address_components[4].long_name };
                                _this.cachedResults[zip] = result; //perist to cache
                                console.log('cache is now', _this.cachedResults);
                                return result;
                            }
                            else {
                                console.warn('zip' + zip + ' did not match any city or state');
                                return { city: 'Unknown city', state: 'Unknown state' };
                            }
                        });
                    }
                };
                Api = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], Api);
                return Api;
            }());
            exports_1("Api", Api);
        }
    };
});
//# sourceMappingURL=api.js.map