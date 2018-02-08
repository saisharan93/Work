System.register(["./guide", "./exercise.six", "./click.global", "./exercise.five", "./ng.hide", "./exercise.four", "./address", "./exercise.three", "./exercise.two", "./api", "./slide.container", "./slide", "./radiogroup", "./exercise.one", "./routes", "@angular/core", "@angular/platform-browser", "./app.component", "@angular/forms", "@angular/router", "@angular/common", "@angular/http", "./ssnMask", "./SaveFormGuard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var guide_1, exercise_six_1, click_global_1, exercise_five_1, ng_hide_1, exercise_four_1, address_1, exercise_three_1, exercise_two_1, api_1, slide_container_1, slide_1, radiogroup_1, exercise_one_1, routes_1, core_1, platform_browser_1, app_component_1, forms_1, router_1, common_1, http_1, ssnMask_1, SaveFormGuard_1, exercise_five_2, AppModule;
    return {
        setters: [
            function (guide_1_1) {
                guide_1 = guide_1_1;
            },
            function (exercise_six_1_1) {
                exercise_six_1 = exercise_six_1_1;
            },
            function (click_global_1_1) {
                click_global_1 = click_global_1_1;
            },
            function (exercise_five_1_1) {
                exercise_five_1 = exercise_five_1_1;
                exercise_five_2 = exercise_five_1_1;
            },
            function (ng_hide_1_1) {
                ng_hide_1 = ng_hide_1_1;
            },
            function (exercise_four_1_1) {
                exercise_four_1 = exercise_four_1_1;
            },
            function (address_1_1) {
                address_1 = address_1_1;
            },
            function (exercise_three_1_1) {
                exercise_three_1 = exercise_three_1_1;
            },
            function (exercise_two_1_1) {
                exercise_two_1 = exercise_two_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (slide_container_1_1) {
                slide_container_1 = slide_container_1_1;
            },
            function (slide_1_1) {
                slide_1 = slide_1_1;
            },
            function (radiogroup_1_1) {
                radiogroup_1 = radiogroup_1_1;
            },
            function (exercise_one_1_1) {
                exercise_one_1 = exercise_one_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ssnMask_1_1) {
                ssnMask_1 = ssnMask_1_1;
            },
            function (SaveFormGuard_1_1) {
                SaveFormGuard_1 = SaveFormGuard_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [forms_1.ReactiveFormsModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes_1.routes), http_1.HttpModule, common_1.CommonModule],
                        declarations: [exercise_five_2.MemoryPipe, ssnMask_1.SsnMask, radiogroup_1.CustomRadioGroup, app_component_1.CodeApp, exercise_one_1.ExerciseOne, slide_container_1.SlideContainer, slide_1.Slide, exercise_two_1.ExerciseTwo, exercise_three_1.ExerciseThree, address_1.Address, exercise_four_1.ExerciseFour, ng_hide_1.NgHide, exercise_five_1.ExerciseFive, click_global_1.ClickGlobal, exercise_six_1.ExerciseSix, guide_1.Guide],
                        entryComponents: [exercise_one_1.ExerciseOne, slide_container_1.SlideContainer, slide_1.Slide, exercise_two_1.ExerciseTwo, exercise_three_1.ExerciseThree, address_1.Address, exercise_four_1.ExerciseFour, exercise_five_1.ExerciseFive, click_global_1.ClickGlobal, exercise_six_1.ExerciseSix, guide_1.Guide],
                        providers: [SaveFormGuard_1.SaveFormGuard, api_1.Api],
                        bootstrap: [app_component_1.CodeApp]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map