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
    template: `
        <h2>Custom validator directives for template driven forms</h2>
        <a href="http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html">Link to article</a>
        <h4>This Example Doesn't work with current Alpha version </h4>
        
        <form #f="ngForm">
            Required   <input type="text" ngControl="name" required>
            Min Length <input type="text" ngControl="street" minlength="3">
            Email      <input type="text" ngControl="email" validateEmail>
        </form>
    `,
    directives: [] // notice it doesn't need FORM_DIRECTIVES to use native validators
})
export class Form5 {
    constructor() {

    }

};