System.register(["@angular/common/testing", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            // BrowserDomAdapter.makeCurrent();
            beforeEach(function () {
                jasmine.addMatchers({
                    toContainText: function () {
                        return {
                            compare: function (actual, expectedText) {
                                var actualText = actual.textContent;
                                return {
                                    pass: actualText.indexOf(expectedText) > -1,
                                    get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
                                };
                            }
                        };
                    }
                });
            });
        }
    };
});
//# sourceMappingURL=test.js.map