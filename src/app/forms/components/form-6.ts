import {Component} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}

class UsernameValidator {
  static startsWithNumber(control: FormControl): ValidationResult {
    if (control.value != "" && !isNaN(control.value.charAt(0))) {
      return {"startsWithNumber": true};
    }
    return null;
  }

  static usernameTaken(control: FormControl): Promise<ValidationResult> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "nick") {
          resolve({"usernameTaken": true})
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}


@Component({
  selector: 'form-six',
  template: require('./form-6.html')
})
export class FormSixComponent {
  form: FormGroup;
  username: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.username = new FormControl("",
      Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
      UsernameValidator.usernameTaken
    );
    this.form = this.formBuilder.group({
      username: this.username
    });
  }

  submitData() {
    console.log(JSON.stringify(this.form.value))
  }
}
;
