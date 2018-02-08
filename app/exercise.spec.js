System.register(["@angular/forms", "./exercise.three", "./api"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var forms_1, exercise_three_1, api_1;
    return {
        setters: [
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (exercise_three_1_1) {
                exercise_three_1 = exercise_three_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }
        ],
        execute: function () {
            describe('Unit Tests', function () {
                var ex3;
                var fb;
                var http;
                var api;
                beforeEach(function () {
                    fb = new forms_1.FormBuilder();
                    api = new api_1.Api(http);
                    ex3 = new exercise_three_1.ExerciseThree(fb, api, http);
                });
                it('selectedState should be initialized', function () {
                    expect(ex3.selectedState.value).toBe('VA');
                });
                it('address should be initialized', function () {
                    expect(ex3.formular.value.address).toBe('');
                });
                //write in the field
                afterAll(function () {
                    //nop
                });
            }); /*
            import {Component, DebugElement} from "@angular/core";
            import {ComponentFixture, TestBed} from '@angular/core/testing';
            import {SsnMask} from './ssnMask';
            import {By} from "@angular/platform-browser";
            
            @Component({
                template: `<input type="text" [formControl]="test" ssn>`
            })
            
            class TestSsnComponent {
            }
            
            describe('Directive: ssnMask', () => {
            
                let component: TestSsnComponent;
                let fixture: ComponentFixture<TestSsnComponent>;
                let inputEl: DebugElement;
            
                beforeEach(() => {
                    TestBed.configureTestingModule({
                        declarations: [TestSsnComponent, SsnMask]
                    });
                    fixture = TestBed.createComponent(TestSsnComponent);
                    component = fixture.componentInstance;
                    inputEl = fixture.debugElement.query(By.css('input'));
                });
            
                it('true is true', () => {
                    expect(true).toBe(true);
                })
            
                // it('typing in input field', () => {
                    //inputEl.triggerEventHandler('keypress', { key: 'ArrowUp' });
                   /!* inputEl.nativeElement.value = '12345';
            
                    fixture.detectChanges();
                    expect(inputEl.nativeElement.style.borderColor).toBe('red');
            
                    inputEl.triggerEventHandler('blur', null);*!/
                   /!* fixture.detectChanges();
                    console.log(inputEl.nativeElement.style.backgroundColor);
                    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');*!/
                // });
            });*/
        }
    };
});
//# sourceMappingURL=exercise.spec.js.map