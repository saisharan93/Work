System.register(["@angular/core", "@angular/forms", "./api"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, api_1, noop, Address;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }
        ],
        execute: function () {
            noop = function () {
            };
            Address = (function () {
                function Address(api) {
                    this.api = api;
                    this.innerValue = '';
                    this.data = { state: null, city: null, zip: null, streetNumber: null };
                    this.onTouchedCallback = noop;
                    this.onChangeCallback = noop;
                }
                Address_1 = Address;
                Address.prototype.updateAddress = function () {
                    this.innerValue = this.data.streetNumber + ', ' +
                        this.data.city + ', ' +
                        this.data.myState.label + ' ' +
                        this.data.zip;
                    this.onChangeCallback(this.innerValue);
                };
                Address.prototype.ngOnInit = function () {
                    var _this = this;
                    this.data.myState = this.states.filter(function (state) { return state.value === _this.defaultState.value; })[0];
                };
                Address.prototype.autocomplete = function (zip) {
                    var _this = this;
                    this.api.getCityState(zip)
                        .subscribe(function (response) {
                        var matchingResult = false;
                        _this.states.forEach(function (state) {
                            if (state.label == response.state) {
                                matchingResult = state;
                                this.data.myState = matchingResult;
                            }
                        });
                        if (!matchingResult) {
                            var createdState = { label: response.state, value: response.state.substr(0, 2).toUpperCase() }; //create a new state
                            _this.data.myState = createdState; //select state
                            _this.states.push(createdState);
                        }
                        _this.data.city = response.city;
                    });
                };
                Object.defineProperty(Address.prototype, "value", {
                    //get accessor
                    get: function () {
                        return this.innerValue;
                    },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.innerValue) {
                            this.innerValue = v;
                            this.onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                Address.prototype.onBlur = function () {
                    this.onTouchedCallback();
                };
                //Communication from outside to inside.
                Address.prototype.writeValue = function (value) {
                    if (value !== this.innerValue) {
                        this.innerValue = value;
                        this.data = {};
                    }
                };
                //From ControlValueAccessor interface
                Address.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                Address.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], Address.prototype, "defaultState", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], Address.prototype, "states", void 0);
                Address = Address_1 = __decorate([
                    core_1.Component({
                        selector: 'address',
                        template: "\n        <form #form=\"ngForm\">\n\n\n            <button type=\"button\" class=\"btn\" [ngClass]=\"{'btn-primary' : form.valid}\" [disabled]=\"!form.valid\"\n                    (click)=\"updateAddress()\">Get current address\n            </button>\n            <br><br>\n            <span [hidden]=\"!innerValue\">{{innerValue}}</span>\n            <br><br>\n\n            <span>street</span><input required name=\"streetNumber\" [(ngModel)]=\"data.streetNumber\"\n                                      class=\"form-control\"/><br>\n            <span>zip</span><input required name=\"zip\" [(ngModel)]=\"data.zip\" class=\"form-control\" maxlength=\"5\"\n                                   minlength=\"5\"\n                                   (blur)=\"(data.zip.length === 5) && autocomplete(data.zip)\"/>\n            <br>\n            <span>city</span><input required name=\"city\" [(ngModel)]=\"data.city\" class=\"form-control\">\n            <br>\n\n            <span>state</span>\n            <select [(ngModel)]=\"data.myState\" required name=\"state\" class=\"form-control\">\n                <option *ngFor=\"let state of states;\" [ngValue]=\"state\">{{state.label}}</option>\n            </select><br><br>\n        </form>\n    ",
                        providers: [
                            { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: Address_1, multi: true }
                        ]
                    }),
                    __metadata("design:paramtypes", [api_1.Api])
                ], Address);
                return Address;
                var Address_1;
            }());
            exports_1("Address", Address);
        }
    };
});
//# sourceMappingURL=address.js.map