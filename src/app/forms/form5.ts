import {Component, Directive, provide} from 'angular2/core';
import { Control, NG_VALIDATORS } from 'angular2/common';

interface Validator<T extends Control> {
    (c:T): {[error: string]:any};
}

function validateEmail(c: Control) {
    let EMAIL_REGEXP = /[A-Z]{3}/g;

    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}

/*
 All built-in validators are already added to the NG_VALIDATORS token.
 Angular has an internal mechanism to execute validators on a form control.
 It maintains a multi provider for a dependency token called NG_VALIDATORS.
* */
@Directive({
    selector: '[validateEmail][ngControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useValue: validateEmail,
            multi: true // multi-provider
        })
    ]
})
class EmailValidator {}


@Component({
    selector: 'form-five',
    template: require('./form5.html'),
    directives: [] // notice it doesn't need FORM_DIRECTIVES to use native validators
})
export class Form5 {
    constructor() {

    }

};