import {Directive, Injectable, forwardRef} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Injectable()
class EmailBlackListService {
    getRegex () {
        return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
}


function validateEmailFactory(emailBlackList:EmailBlackListService) {
    return (c:FormControl) => {
        let EMAIL_REGEXP = emailBlackList.getRegex();

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}


@Directive({
    selector: '[validateEmailDeps][ngModel],[validateEmailDeps][formControl]',
    providers: [
        EmailBlackListService,
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorWithDeps), multi: true}
    ]
})
export class EmailValidatorWithDeps implements Validator {
    validator:Function;

    constructor(emailBlackList:EmailBlackListService) {
        this.validator = validateEmailFactory(emailBlackList);
    }

    validate(c:FormControl) {
        return this.validator(c);
    }
}

