import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  return EMAIL_REGEXP.test(c.value)
    ? null
    : {
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
  selector: '[validateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true // multi-provider
    }
  ]
})
export class FormSevenEmailValidator {
}
