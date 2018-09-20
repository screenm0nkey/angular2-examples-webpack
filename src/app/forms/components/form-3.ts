import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /abcd/;
  let valid = EMAIL_REGEXP.test(c.value);
  console.log(c.value, valid);

  return valid
    ? null
    : {
        validateEmail: {
          valid: false
        }
      };
}

@Component({
  selector: 'form-three',
  templateUrl: './form-3.html',
  styles: ['.invalid {background: burlywood}']
})
export class FormThreeComponent {
  // make the control instance available to the form as you can't exportAs
  // like you can in template driven forms
  nameCtrl = new FormControl('', Validators.required);

  registerForm = new FormGroup({
    firstname: this.nameCtrl,
    lastname: new FormControl('Schmancy'),
    email: new FormControl('', [Validators.required, validateEmail]),
    address: new FormGroup({
      street: new FormControl('', Validators.minLength(3)),
      city: new FormControl('', Validators.maxLength(10)),
      zip: new FormControl('', Validators.pattern('[A-Za-z]{5}'))
    })
  });

  ngOnInit() {}

  submit() {
    console.log(this.registerForm.value);
  }
}
