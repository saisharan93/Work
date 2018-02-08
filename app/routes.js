System.register(["./guide", "./exercise.six", "./exercise.five", "./exercise.four", "./exercise.three", "./exercise.two", "./exercise.one", "./SaveFormGuard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var guide_1, exercise_six_1, exercise_five_1, exercise_four_1, exercise_three_1, exercise_two_1, exercise_one_1, SaveFormGuard_1, routes;
    return {
        setters: [
            function (guide_1_1) {
                guide_1 = guide_1_1;
            },
            function (exercise_six_1_1) {
                exercise_six_1 = exercise_six_1_1;
            },
            function (exercise_five_1_1) {
                exercise_five_1 = exercise_five_1_1;
            },
            function (exercise_four_1_1) {
                exercise_four_1 = exercise_four_1_1;
            },
            function (exercise_three_1_1) {
                exercise_three_1 = exercise_three_1_1;
            },
            function (exercise_two_1_1) {
                exercise_two_1 = exercise_two_1_1;
            },
            function (exercise_one_1_1) {
                exercise_one_1 = exercise_one_1_1;
            },
            function (SaveFormGuard_1_1) {
                SaveFormGuard_1 = SaveFormGuard_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: '', pathMatch: 'full', redirectTo: '/guide' },
                { path: 'guide', component: guide_1.Guide },
                { path: 'exercise-one', component: exercise_one_1.ExerciseOne },
                { path: 'exercise-two', component: exercise_two_1.ExerciseTwo },
                { path: 'exercise-three', component: exercise_three_1.ExerciseThree, canDeactivate: [SaveFormGuard_1.SaveFormGuard] },
                { path: 'exercise-four', component: exercise_four_1.ExerciseFour },
                { path: 'exercise-five', component: exercise_five_1.ExerciseFive },
                { path: 'exercise-six', component: exercise_six_1.ExerciseSix }
            ]);
        }
    };
});
//# sourceMappingURL=routes.js.map