import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {EmailValidator} from './custom-validator-directive';
import {EmailValidatorWithDeps} from './custom-validator-directive-with-deps';


@Component({
    selector: 'form-five',
    styles : ['.label{ color : black; width : 200px; display : inline-block; text-align:left} .ng-dirty.ng-invalid {border: 1px red solid;}'],
    template: require('./form-7.html'),
    directives: [EmailValidator, EmailValidatorWithDeps, REACTIVE_FORM_DIRECTIVES] // notice it doesn't need FORM_DIRECTIVES to use native validators
})
export class FormSeven {
    constructor() {}
};