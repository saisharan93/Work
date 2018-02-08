System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, noop, CustomRadioGroup;
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
            noop = function () {
            };
            CustomRadioGroup = (function () {
                function CustomRadioGroup() {
                    //The internal data model
                    this.innerValue = '';
                    //Placeholders for the callbacks which are later providesd
                    //by the Control Value Accessor
                    this.onTouchedCallback = noop;
                    this.onChangeCallback = noop;
                }
                CustomRadioGroup_1 = CustomRadioGroup;
                Object.defineProperty(CustomRadioGroup.prototype, "value", {
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
                CustomRadioGroup.prototype.onBlur = function () {
                    this.onTouchedCallback();
                };
                //Communication from outside to inside.
                CustomRadioGroup.prototype.writeValue = function (value) {
                    if (value !== this.innerValue) {
                        this.innerValue = value;
                    }
                };
                //From ControlValueAccessor interface
                CustomRadioGroup.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                CustomRadioGroup.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], CustomRadioGroup.prototype, "items", void 0);
                CustomRadioGroup = CustomRadioGroup_1 = __decorate([
                    core_1.Component({
                        selector: 'radio-group',
                        template: "\n        <div>\n            <ng-content></ng-content>\n            <span *ngFor=\"let item of items\">\n                <label>\n                    <input type=\"radio\" name=\"test\" value=\"{{item}}\" (blur)=\"onBlur()\" [(ngModel)]=\"value\" > <!-- (click)=\"value(item)\" [(ngModel)]=\"selectedRadio\"-->\n                        {{item}}\n                </label>\n                <br>\n            </span>\n        </div>\n  ",
                        providers: [
                            { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: CustomRadioGroup_1, multi: true }
                        ],
                    })
                ], CustomRadioGroup);
                return CustomRadioGroup;
                var CustomRadioGroup_1;
            }());
            exports_1("CustomRadioGroup", CustomRadioGroup);
        }
    };
});
//# sourceMappingURL=radiogroup.js.map