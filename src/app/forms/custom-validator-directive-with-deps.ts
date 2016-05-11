import {Component, Directive, provide, Injectable, forwardRef} from '@angular/core';
import { Control, NG_VALIDATORS, Validator } from '@angular/common';

@Injectable()
class EmailBlackList {}

function validateEmailFactory(emailBlackList: EmailBlackList) {
    return (c: Control) => {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}

@Directive({
    selector: '[validateEmailDeps][ngControl],[validateEmailDeps][ngModel],[validateEmailDeps][ngFormControl]',
    providers: [
        EmailBlackList,
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => EmailValidatorWithDeps),
            multi: true
        })
    ]
})
export class EmailValidatorWithDeps implements Validator {
    validator: Function;

    constructor(emailBlackList: EmailBlackList) {
        this.validator = validateEmailFactory(emailBlackList);
    }
    validate(c: Control) {
        return this.validator(c);
    }
}

