import {FormBuilder} from "@angular/forms";
import {ExerciseThree} from "./exercise.three";
import {Http} from "@angular/http";
import {Api} from "./api";

describe('Unit Tests', () => {
    let ex3: ExerciseThree;
    let fb: FormBuilder;
    let http: Http;
    let api: Api;

    beforeEach(() => {
        fb = new FormBuilder();
        api = new Api(http);
        ex3 = new ExerciseThree(fb,api,http);
    });

    it('selectedState should be initialized', () => {
        expect(ex3.selectedState.value).toBe('VA');
    });

    it('address should be initialized', () => {
        expect(ex3.formular.value.address).toBe('');
    });

    //write in the field


    afterAll(() => {
        //nop
    });
});/*
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