import {Component} from '@angular/core';
import { FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES ,Validators} from '@angular/forms';

@Component({
    selector: 'form-four',
    template: require('./form-4.html'),
    directives : [ REACTIVE_FORM_DIRECTIVES]
})

export class FormFour {
    myform : FormGroup;
    payLoad : String = '';
    cities : any[] = [{name:'London'}, {name:'Berlin'}, {name:'Rotheram'}];
    selectedCity;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.selectedCity = this.cities[2];
        // calling fb.group() returns a controlGroup
        this.myform = this.formBuilder.group({
            "checkMe": [true, Validators.required],
            "firstName": ['', Validators.required],
            "streetAddress": ['',Validators.required],
            "zip": ['', Validators.compose([this.zipValidator])],
            "type": ['home'],
            "city" : []
        });
    }

    logit (evt, ngForm, myform) {
        console.log('ngForm', ngForm.form);
        console.log('myform', myform);
        console.log(this.selectedCity)
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

//this.registerForm.controls.address.controls.street.valid