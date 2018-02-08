System.register(["@angular/core", "@angular/forms", "./api", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, api_1, http_1, ExerciseThree;
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
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ExerciseThree = (function () {
                function ExerciseThree(fb, api, http) {
                    this.api = api;
                    this.http = http;
                    this.result = '';
                    this.states = [{ label: "Kentucky", value: "KY" }, { label: "Virginia", value: "VA" }, { label: "California", value: "CA" }];
                    this.selectedState = this.states[1];
                    this.formular = fb.group({
                        'ssn': ["", forms_1.Validators.compose([forms_1.Validators.required, this.ssnValueValidator])],
                        'address': ["", forms_1.Validators.required]
                    });
                }
                ExerciseThree.prototype.ssnValueValidator = function (control) {
                    var ssn = control.value;
                    if (ssn.match(/^(\d{3}-?\d{2}-?\d{4})$/)) {
                        return null;
                    }
                    return {
                        ssnWrong: true
                    };
                };
                ExerciseThree.prototype.reset = function () {
                    this.result = '';
                    this.formular.reset({
                        address: '',
                        ssn: ''
                    });
                };
                ExerciseThree.prototype.submitForm = function (form) {
                    var _this = this;
                    this.http.post('dummy.json', form)
                        .subscribe(function (result) { _this.result = result.json().successMessage; });
                };
                ExerciseThree.prototype.canDeactivate = function () {
                    return !this.formular.dirty;
                };
                ExerciseThree = __decorate([
                    core_1.Component({
                        selector: '[exercise-three]',
                        template: "\n        <h2>exercise three - forms elements, angular inputs/outputs, validators, formatters</h2>\n        <ul>\n            <li>create form with below controls</li>\n            <li>ssn (textbox)</li>\n            <li>address component - update address component with below html inputs and functionality\n                <ul>\n                    <li>street (textbox)</li>\n                    <li>zip (textbox)</li>\n                    <li>city (textbox)</li>\n                    <li>state (dropdown)</li>\n                    <li>When valid 5 digit zip code is entered and user focus out from zip code textbox, populate the\n                        city and state automatically (using Api getCityState function implemented in exercise one.)\n                    </li>\n                    <li>set (VA, CA, KY) options in the state dropdown statically.</li>\n                    <li>using angular input we should be able to set the VA as the default selected state (when user\n                        intially lands to this page).\n                    </li>\n                    <li>use angular output to send back the selected state from dropdown back to parent component\n                        selectedState property. Hint: use angular input/output\n                    </li>\n                </ul>\n            </li>\n\n            <li>create a angular formatter directive to format the ssn like ###-##-####.\n                <ul>\n                    <li>it should automatically add the dash when user types ssn (if on type not possible you can format\n                        on focus out).\n                    </li>\n                    <li>write a unit test for this formatter to make sure it works properly on any input value. (use\n                        exercise.spec.ts file to write your test cases, and you can run the unit tests using navigation\n                        link \"Run Unit tests\")\n                    </li>\n                    <li>Ex: 123 -> 123\n                        12 -> 12\n                        1234 -> 123-4\n                        12345 -> 123-45\n                        123456 -> 123-45-6\n                        etc...\n                    </li>\n                </ul>\n            </li>\n\n            <li>create a angular validator to validate the ssn input value is in ###-##-#### format.\n                <ul>\n                    <li>show validation error messages (below the input in red color) if ssn input is empty or invalid\n                        format.\n                    </li>\n                    <li>validation should only start when user focus out for the first time from the input, after that\n                        it will display the validation in realtime.\n                    </li>\n                    <li>input should contain red color border if invalid.</li>\n                </ul>\n            </li>\n\n            <li>address component should have public function to return the formatted address in below format.\n                <ul>\n                    <li>ex: street, city, state zipcode</li>\n                </ul>\n            </li>\n\n            <li>wrap all input elements inside the html form.\n                <ul>\n                    <li>add a button to reset the form elements to default values.</li>\n                    <li>add another button to submit the form to dummy.json file with below json POST body and show the\n                        returned JSON response \"successMessage\" value in the html below the form.\n                        (note ssn doesnt have dashes and address is formatted using previous format function form\n                        address component.)\n                    </li>\n                    <li><code>\"ssn\": \"123456789\", \"address\": \"street, city, state zip\"</code></li>\n                </ul>\n            </li>\n\n            <li>OPTIONAL - add a route guard for this route (exercise-three), so that it wont allow user to change the\n                route without confirming (use vanilla js confirm window).\n                <ul>\n                    <li>only show this confirm when form is dirty. (if member reset form input elements this confirm\n                        message should not show up)\n                    </li>\n                </ul>\n            </li>\n        </ul>\n\n        <!--address-->\n        <form [formGroup]=\"formular\" (ngSubmit)=\"submitForm(formular.value)\">\n            <div [ngClass]=\"{red : (formular.controls.ssn.touched && formular.controls.ssn.hasError('required')) || (formular.controls.ssn.touched && formular.controls.ssn.hasError('ssnWrong'))}\">\n                <span>SSN :</span>\n                <input ssn maxlength=\"11\" class=\"form-control\" id=\"ssn-input\" [formControl]=\"formular.controls.ssn\"/><br>\n                <div [hidden]=\"!formular.controls.ssn.touched\">\n                    <span [hidden]=\"!formular.controls.ssn.hasError('ssnWrong')\" class=\"red\"><b>Invalid SSN format (use: ###-##-###)</b></span><br>\n                    <span [hidden]=\"!(formular.controls.ssn.hasError('required') && formular.controls.ssn.touched)\"><b>SSN required</b></span><br>\n                </div>\n            </div>\n\n            <address [defaultState]=\"selectedState\" [states]=\"states\" [formControl]=\"formular.controls.address\" ></address>\n\n            <span class=\"green\" [hidden]=\"!result\">{{result}}</span><br><br>\n            <span class=\"btn btn-warning\" (click)=\"reset()\">reset</span>\n            <button class=\"btn btn-success\" [disabled]=\"!formular.valid\">Submit</button>\n        </form>\n\n    "
                    }),
                    __metadata("design:paramtypes", [forms_1.FormBuilder, api_1.Api, http_1.Http])
                ], ExerciseThree);
                return ExerciseThree;
            }());
            exports_1("ExerciseThree", ExerciseThree);
        }
    };
});
//# sourceMappingURL=exercise.three.js.map