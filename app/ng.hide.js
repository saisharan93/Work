System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, NgHide;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            NgHide = (function () {
                function NgHide() {
                }
                __decorate([
                    core_1.Input(), core_1.HostBinding('class.ngHide'),
                    __metadata("design:type", Boolean)
                ], NgHide.prototype, "ngHide", void 0);
                NgHide = __decorate([
                    core_1.Directive({
                        selector: '[ngHide]'
                    })
                ], NgHide);
                return NgHide;
            }());
            exports_1("NgHide", NgHide);
        }
    };
});
//# sourceMappingURL=ng.hide.js.map