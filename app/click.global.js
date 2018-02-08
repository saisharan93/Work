System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, ClickGlobal;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ClickGlobal = (function () {
                function ClickGlobal(_eleRef) {
                    this._eleRef = _eleRef;
                }
                ClickGlobal.prototype.click = function (event) {
                    if (event.toElement.className.indexOf('update-time') !== -1) {
                        this.date = Date.now().toString();
                    }
                };
                __decorate([
                    core_1.HostListener('click', ['$event']),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", void 0)
                ], ClickGlobal.prototype, "click", null);
                ClickGlobal = __decorate([
                    core_1.Component({
                        selector: '[click-global]',
                        template: "\n        last clicked date time: {{date | date:'medium'}}\n        <br/>\n\n        <button *ngFor=\"let btn of [1, 2, 3, 4]\" class=\"update-time btn btn-success\">button {{btn}} is working</button>\n        <br/>\n        <button class=\"btn btn-default\" *ngFor=\"let btn of [5, 6]\">button {{btn}}</button>\n        <br/>\n        <button class=\"btn btn-default\">single button</button>\n        <br/>\n        <div style=\"width: 500px; display: block;height:500px;\" tabindex=\"0\">\n            <div>\n                <button class=\"update-time btn btn-success\">button works!!!</button>\n            </div>\n        </div>\n    "
                    }),
                    __metadata("design:paramtypes", [core_1.ElementRef])
                ], ClickGlobal);
                return ClickGlobal;
            }());
            exports_1("ClickGlobal", ClickGlobal);
        }
    };
});
//# sourceMappingURL=click.global.js.map