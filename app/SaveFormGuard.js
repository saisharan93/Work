System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SaveFormGuard;
    return {
        setters: [],
        execute: function () {
            SaveFormGuard = (function () {
                function SaveFormGuard() {
                }
                SaveFormGuard.prototype.canDeactivate = function (component, route, state) {
                    return component.canDeactivate() || window.confirm("Are you sure?");
                };
                return SaveFormGuard;
            }());
            exports_1("SaveFormGuard", SaveFormGuard);
        }
    };
});
//# sourceMappingURL=SaveFormGuard.js.map