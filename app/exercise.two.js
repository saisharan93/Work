System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, ExerciseTwo;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ExerciseTwo = (function () {
                function ExerciseTwo() {
                    this.slideDatas = [{
                            title: 'one',
                            isSelected: false
                        }, {
                            title: 'two',
                            isSelected: false
                        }, {
                            title: 'three',
                            isSelected: false
                        }, {
                            title: 'four',
                            isSelected: false
                        }, {
                            title: 'n',
                            isSelected: false
                        }];
                }
                ExerciseTwo.prototype.onDeSelect = function (slide) {
                    slide.isSelected = false;
                };
                ExerciseTwo.prototype.onSelect = function (slideToSelect) {
                    //deselect any slide which is selected.
                    this.slideDatas = this.slideDatas.map(function (s) {
                        s.isSelected = s.title == slideToSelect.title;
                        return s;
                    });
                };
                ExerciseTwo = __decorate([
                    core_1.Component({
                        selector: '[exercise-two]',
                        template: "\n        <h2>exercise two - transclusion</h2>\n        <ul>\n            <li>add support to transclude multiple slide components into slide container component.</li>\n            <li>update slide container component to show list of buttons correspond to each transcluded slide.</li>\n            <ul>\n                <li>use ngFor to loop and create button for each slide component available.</li>\n                <li>you will need to identify how many tab components are transcluded and create same number of buttons\n                    with the title property value of tab component as button text))\n                </li>\n                <li>on click of each button de-select the current selected component (by executing onDeSelect function\n                    in selected component)\n                </li>\n                <li>and select the corresponding component for clicked button (using onSelected function).</li>\n            </ul>\n            <li>do not use any jquery or pure js dom manipulation or query functions for above.</li>\n        </ul>\n\n        <p>Slides </p>\n        <div slide-container (slideDeselected)=\"onDeSelect($event)\" (slideSelected)=\"onSelect($event)\" >\n            <div *ngFor=\"let s of slideDatas;\"\n                 slide\n                 [selected]=\"s.isSelected\"\n                 [title]=\"s.title\"></div>\n        </div>\n    "
                    }),
                    __metadata("design:paramtypes", [])
                ], ExerciseTwo);
                return ExerciseTwo;
            }());
            exports_1("ExerciseTwo", ExerciseTwo);
        }
    };
});
//# sourceMappingURL=exercise.two.js.map