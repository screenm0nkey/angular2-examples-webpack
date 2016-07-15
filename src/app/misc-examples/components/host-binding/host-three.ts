import { Component, Directive, HostBinding, ElementRef} from '@angular/core';
import {
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Directive({selector: '[ngModel]'})
class NgModelStatus {
    constructor(public el: ElementRef) {}

    @HostBinding('class.YES') get valid() {
        return this.el.nativeElement.className.indexOf('ng-valid')>0;
    }
}


@Component({
    selector: 'host-three-component',
    directives: [REACTIVE_FORM_DIRECTIVES, NgModelStatus],
    providers: [FormBuilder],
    styles : [`.ng-invalid {
        border:solid 1px red;
    }`],
    template: `
        <a href="https://angular.io/docs/ts/latest/api/core/HostBinding-var.html">
            https://angular.io/docs/ts/latest/api/core/HostBinding-var.html
        </a>
        <form [formGroup]="myForm">
            <input [(ngModel)]="prop" placeholder="minLength 3" formControlName="checkme">
        </form>
    `
})
export class HostThree {
    prop:String;
    myForm : FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "checkme": ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])]
        });
    }
}

