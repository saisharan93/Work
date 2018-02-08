System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, Guide;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Guide = (function () {
                function Guide() {
                }
                Guide = __decorate([
                    core_1.Component({
                        selector: '[guide]',
                        template: "\n    Code your changes in each exercise component typescript file. and you can use above navigation links to view each component seperately or use this page to view all components.\n    <div exercise-one></div>\n    <div exercise-two></div>\n    <div exercise-three></div>\n    <div exercise-four></div>\n    <div exercise-five></div>\n    <div exercise-six></div>\n  "
                    })
                ], Guide);
                return Guide;
            }());
            exports_1("Guide", Guide);
        }
    };
});
//# sourceMappingURL=guide.js.map