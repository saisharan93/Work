System.register(["@angular/core", "./slide"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, slide_1, SlideContainer;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_1_1) {
                slide_1 = slide_1_1;
            }
        ],
        execute: function () {
            SlideContainer = (function () {
                function SlideContainer() {
                    this.slideSelected = new core_1.EventEmitter();
                    this.slideDeselected = new core_1.EventEmitter();
                }
                SlideContainer.prototype.selectSlide = function (slide) {
                    var isSlideCurrentSlide = slide.isSelected;
                    if (isSlideCurrentSlide) {
                        this.slideDeselected.emit(slide); //slide unselect
                    }
                    else {
                        this.slideSelected.emit(slide); //slide select
                    }
                };
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], SlideContainer.prototype, "slideSelected", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], SlideContainer.prototype, "slideDeselected", void 0);
                __decorate([
                    core_1.ContentChildren(slide_1.Slide),
                    __metadata("design:type", core_1.QueryList)
                ], SlideContainer.prototype, "slideItems", void 0);
                SlideContainer = __decorate([
                    core_1.Component({
                        selector: '[slide-container]',
                        template: "\n        <button \n                (click)=\"selectSlide(s)\"\n                style=\"margin-right:10px;\"\n                *ngFor=\"let s of slideItems;\">slide {{s.title}}</button>\n        <ng-content></ng-content> <!-- Render slides here with transclusion -->\n        \n  ",
                        styles: [
                            'display: block;',
                            'width: 100%'
                        ]
                    })
                ], SlideContainer);
                return SlideContainer;
            }());
            exports_1("SlideContainer", SlideContainer);
        }
    };
});
//# sourceMappingURL=slide.container.js.map