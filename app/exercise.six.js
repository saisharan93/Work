System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, ExerciseSix;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            ExerciseSix = (function () {
                function ExerciseSix(formbuilder) {
                    this.states = ['va', 'ca', 'ky'];
                    this.selectedState = 'ky';
                    this.formular = formbuilder.group({
                        "myState": ["", forms_1.Validators.required],
                    });
                    this.formular.controls['myState'].setValue(this.selectedState);
                }
                ExerciseSix.prototype.submit = function (formData) {
                    console.warn('form content is ', formData);
                };
                ExerciseSix = __decorate([
                    core_1.Component({
                        selector: '[exercise-six]',
                        template: "\n      <h2>exercise six - custom input control and npm scripts</h2>\n      <ul>\n          <li>update the angular route to show this component for exercise-six route and also update the express server\n              script to handle /exercise-  url.\n              <ul>\n                  <li>update top navigation bar to include exercise-six navigation link.</li>\n              </ul>\n          </li>\n\n          <li>create custom input control to handle radio button group.\n              <ul>\n                  <li>it should support ngModel binding like below and set / get model value.</li>\n                  <li>allow using input called items to give array of values, and given control should show radio\n                      buttons for the given array values.\n                  </li>\n                  <li>\n                      <code>\n                          &lt;radio-group [(ngModel)]=\"selectedState\" [items]=\"states\"&gt;&lt;/radio-group&gt;\n                      </code>\n                  </li>\n              </ul>\n          </li>\n      </ul>\n      <form [formGroup]=\"formular\" (ngSubmit)=\"submit(formular.value)\">\n          <radio-group [items]=\"states\" \n                       [formControl]=\"formular.controls['myState']\"\n                       [(ngModel)]=\"selectedState\"\n          ></radio-group>\n          <button class=\"btn btn-primary\">Submit me</button>\n      </form>\n        <br><br>\n        <b> selectedState is {{selectedState}}</b>\n     <br/>\n\n  "
                    }),
                    __metadata("design:paramtypes", [forms_1.FormBuilder])
                ], ExerciseSix);
                return ExerciseSix;
            }());
            exports_1("ExerciseSix", ExerciseSix);
        }
    };
});
//# sourceMappingURL=exercise.six.js.map