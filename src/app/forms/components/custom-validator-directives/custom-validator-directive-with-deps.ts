import {Directive, forwardRef, Injectable} from "@angular/core";
import {FormControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Injectable()
class EmailBlackListService {
  getRegex() {
    return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }
}


function validateEmailFactory(emailBlackList: EmailBlackListService) {
  return (c: FormControl) => {
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
    {
      // we're extending NG_VALIDATORS https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormSevenEmailValidatorWithDeps),
      multi: true
    }
  ]
})
export class FormSevenEmailValidatorWithDeps implements Validator {
  validator: Function;

  constructor(emailBlackList: EmailBlackListService) {
    this.validator = validateEmailFactory(emailBlackList);
  }

  // this method is needed as the component is the validator
  validate(c: FormControl) {
    return this.validator(c);
  }
}

