System.register(["@angular/core", "@angular/platform-browser"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, ExerciseFour;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            ExerciseFour = (function () {
                function ExerciseFour(sanitize) {
                    this.sanitize = sanitize;
                    this.hide = false;
                    this.members = [
                        {
                            firstName: 'john',
                            dob: '10/10/1980'
                        },
                        {
                            firstName: 'john',
                            dob: '5/5/1950'
                        }
                    ];
                    this.htmlContent = '<p><a onclick="alert(\'hello\')" href="javascript:void(0)">Click me</a> to see a vanilla alert</p>';
                }
                ExerciseFour.prototype.hideMe = function () {
                    this.hide = !this.hide;
                };
                Object.defineProperty(ExerciseFour.prototype, "htmlProperty", {
                    get: function () {
                        return this.sanitize.bypassSecurityTrustHtml(this.htmlContent);
                    },
                    enumerable: true,
                    configurable: true
                });
                ExerciseFour = __decorate([
                    core_1.Component({
                        selector: '[exercise-four]',
                        template: "\n        <h2>exercise four - structural directives, filters and ngTemplate</h2>\n        <ul>\n            <li>update ng.hide directive to add functionality to hide the element when given input condition is true.\n                <ul>\n                    <li>this should work simillar to angular v1 ngHide directive. (v1 uses css class to hide the element\n                        dynamically adding that on condition changes.)\n                    </li>\n                </ul>\n            </li>\n            <li>Use ngTemplateOutlet to show the firstname and dob of each member in members array.\n                <ul>\n                    <li>create common ngTemplate that will accept member object as the context and bind the firstName\n                        and dob to the template html like given exmaple (you will need to setup how to pass member\n                        object as context to this template)\n                    </li>\n                    <li>use ngFor and ngTemplateOutlet. and pass the member data to ng-template to render both members\n                        using same ngTemplate given below.\n                    </li>\n                    <li>formate members dob as MMM dd, yyyy (Ex: Jan 05, 2012)</li>\n                </ul>\n            </li>\n            <li>bind htmlContent value to below div element and make sure when anchor link is clicked javascript alert\n                show up properly.\n            </li>\n        </ul>\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"hideMe()\">Toggle ngHide</button>\n            <br><br><br>\n            <p [ngHide]=\"hide\" style=\"background-color:cornflowerblue\">\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <b>It is visible</b>\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n            </p>\n            <br><br>\n\n            <div [innerHtml]=\"htmlProperty\"></div>\n            \n            <ng-template #friendTemplate let-member=\"member\">\n                <span>Name : {{member.firstName}}</span><br>\n                <span>Dob : {{member.dob | date:'yMMMd'}}</span>\n                <br><br>\n            </ng-template>\n\n            <ng-container *ngFor=\"let member of members\" [ngTemplateOutlet]=\"friendTemplate\"\n                          [ngOutletContext]=\"{ member: member }\">\n            </ng-container>\n        </div>\n    "
                    }),
                    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
                ], ExerciseFour);
                return ExerciseFour;
            }());
            exports_1("ExerciseFour", ExerciseFour);
        }
    };
});
//# sourceMappingURL=exercise.four.js.map