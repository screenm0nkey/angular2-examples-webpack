import { Component, Directive, HostBinding, ElementRef} from '@angular/core';
import { FORM_DIRECTIVES, NgModel, Validators, FormBuilder, ControlGroup} from "@angular/common";

@Directive({selector: '[ngModel]'})
class NgModelStatus {
    constructor(public el: ElementRef) {}

    @HostBinding('class.YES') get valid() {
        return this.el.nativeElement.className.indexOf('ng-valid')>0;
    }
}


@Component({
    selector: 'host-three-component',
    directives: [FORM_DIRECTIVES, NgModelStatus],
    providers: [FormBuilder, NgModel],
    styles : [`.ng-invalid {
        border:solid 1px red;
    }`],
    template: `
        <a href="https://angular.io/docs/ts/latest/api/core/HostBinding-var.html">
            https://angular.io/docs/ts/latest/api/core/HostBinding-var.html
        </a>
        <form [ngFormModel]="myForm">
            <input [(ngModel)]="prop" placeholder="minLength 3" ngControl="checkme">
        </form>
    `
})
export class HostThree {
    prop:String;
    myForm : ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "checkme": ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])]
        });
    }
}

