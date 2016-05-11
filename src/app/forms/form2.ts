import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Control, Validators, FORM_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'form-two',
    directives: [FORM_DIRECTIVES],
    template: require('./form2.html'),
    providers : [FormBuilder]
})

export class Form2 {

    myform : ControlGroup;
    payLoad : String = '';

    constructor(fb: FormBuilder) {
        // calling fb.group() returns a controlGroup
        this.myform = fb.group({
            "checkMe": [true, Validators.required],
            "firstName": ['', Validators.required],
            "streetAddress": ['',Validators.required],
            "zip": ['', Validators.compose([this.zipValidator])],
            "type": ['home']
        });
    }

    logit (evt, ngForm, myform) {
        console.log('ngForm', ngForm);
        console.log('myform', myform);
    }

    zipValidator(zip) {
        let valid = /^\d{5}$/.test(zip.value);
        if(valid){
            return null;
        }
        return {"invalidZip":true};
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.myform.value);
    }
}