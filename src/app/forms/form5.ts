import {Component} from '@angular/core';
import {EmailValidator} from './custom-validator-directive';
import {EmailValidatorWithDeps} from './custom-validator-directive-with-deps';


@Component({
    selector: 'form-five',
    styles : ['.label{ color : black; width : 200px; display : inline-block; text-align:left}'],
    template: require('./form5.html'),
    directives: [EmailValidator, EmailValidatorWithDeps] // notice it doesn't need FORM_DIRECTIVES to use native validators
})
export class Form5 {
    constructor() {}
};