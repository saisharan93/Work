System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, CodeApp;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CodeApp = (function () {
                function CodeApp() {
                }
                CodeApp = __decorate([
                    core_1.Component({
                        selector: '[code-app]',
                        template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"guide\">Coding Exercise</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"exercise-one\">exercise one</a></li>\n            <li><a routerLink=\"exercise-two\">exercise two</a></li>\n            <li><a routerLink=\"exercise-three\">exercise three</a></li>\n            <li><a routerLink=\"exercise-four\">exercise four</a></li>\n            <li><a routerLink=\"exercise-five\">exercise five</a></li>\n            <li><a routerLink=\"exercise-six\">exercise six</a></li>\n            <li><a href=\"test.html\">Run Unit Tests</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n    <div class=\"container\" style=\"margin-top: 50px;\">\n      <router-outlet></router-outlet>\n    </div>"
                    })
                ], CodeApp);
                return CodeApp;
            }());
            exports_1("CodeApp", CodeApp);
        }
    };
});
//# sourceMappingURL=app.component.js.map