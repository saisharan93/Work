System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, SsnMask;
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
            SsnMask = (function () {
                function SsnMask(control) {
                    this.control = control;
                }
                SsnMask.prototype.onInputChange = function (input, backspace) {
                    var finalValue = input.replace(/-/g, '');
                    if (backspace) {
                        finalValue = finalValue.substring(0, finalValue.length);
                    }
                    if (finalValue.length == 0) {
                        finalValue = '';
                    }
                    else if (finalValue.length <= 3) {
                        finalValue = finalValue.replace(/^(\d{0,3})/, '$1');
                    }
                    else if (finalValue.length <= 5) {
                        finalValue = finalValue.replace(/^(\d{0,3})(\d{0,2})/, '$1-$2');
                    }
                    else {
                        finalValue = finalValue.replace(/^(\d{0,3})(\d{0,2})(\d{0,4})/, '$1-$2-$3');
                    }
                    this.control.valueAccessor.writeValue(finalValue);
                };
                SsnMask = __decorate([
                    core_1.Directive({
                        selector: '[formControl][ssn]',
                        host: {
                            '(keydown.backspace)': 'onInputChange($event.target.value, true)',
                            '(ngModelChange)': 'onInputChange($event)'
                        }
                    }),
                    __metadata("design:paramtypes", [forms_1.NgControl])
                ], SsnMask);
                return SsnMask;
            }());
            exports_1("SsnMask", SsnMask);
        }
    };
});
//# sourceMappingURL=ssnMask.js.map