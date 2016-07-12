import {Component} from '@angular/core';
import { FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';


function validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /abcd/;
    let valid = EMAIL_REGEXP.test(c.value);
    console.log(c.value, valid);

    return valid ? null : {
        validateEmail: {
            valid: false
        }
    };
}

@Component({
    selector: 'form-three',
    template: require('./form-3.html'),
    directives : [REACTIVE_FORM_DIRECTIVES],
    styles: ['.invalid {background: burlywood}'],
})

export class FormThree {
    // make the control instance available to the form
    nameCtrl = new FormControl('', Validators.required);

    registerForm = new FormGroup({
        firstname: this.nameCtrl,
        lastname: new FormControl('Schmancy'),
        email: new FormControl('', [Validators.required,validateEmail]),
        address: new FormGroup({
            street: new FormControl('', Validators.minLength(3)),
            city: new FormControl('', Validators.maxLength(10)),
            zip: new FormControl('', Validators.pattern('[A-Za-z]{5}'))
        })
    });

    ngOnInit(){
    }
    
    submit(){
        console.log(this.registerForm.value)
    }
}