System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, Slide;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Slide = (function () {
                function Slide() {
                }
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], Slide.prototype, "title", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], Slide.prototype, "selected", void 0);
                Slide = __decorate([
                    core_1.Component({
                        selector: '[slide]',
                        template: "        \n        <div class=\"slide\" [ngClass]=\"{red : selected}\">Hi this is slide <b>{{title}}</b> and I'm <b>{{(!selected ? 'not' : '')}} selected</b></div>\n    "
                    })
                ], Slide);
                return Slide;
            }());
            exports_1("Slide", Slide);
        }
    };
});
//# sourceMappingURL=slide.js.map