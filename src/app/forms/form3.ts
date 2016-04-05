import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators, FORM_DIRECTIVES, AbstractControl} from 'angular2/common';

interface ValidationResult {
    [key:string]:boolean;
}

@Component({
    selector: 'form-three',
    directives: [FORM_DIRECTIVES],
    templateUrl: '/src/form3.html',
    providers : [FormBuilder]
})

export class Form3 {
    myForm:ControlGroup;
    sku:AbstractControl;
    productName:string;
    payLoad : string = '';

    constructor(fb:FormBuilder) {
        // 'Validators.compose' is used to add multiple validators to a control
        this.myForm = fb.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            sku: ["", Validators.compose([Validators.required, this.skuValidator])], //uses formbuilder control
            pku: ["12", Validators.required], //uses the NgFormControl directive export
            productName: ["", Validators.required] // uses ng-model
        });

        // assigning "sku" here means we can do this in the form; <input [ngFormControl]="sku">
        this.sku = this.myForm.controls['sku'];

        // rxjs observables can be used for keyup validation
        this.sku.valueChanges.subscribe({
            next: (value) => {
                console.log("sku changed to: ", value);
            }
        });
        // the subscribe method takes an object or function as callback
        this.myForm.valueChanges.subscribe(value=> console.log("form changed to: ", value));
        // window.myForm = this;
        console.log(this);
    }

    onSubmit(value:Object) {
        console.log('you submitted value: ', value);
        this.payLoad = JSON.stringify(value);
    }

    // custom validator
    skuValidator(control:AbstractControl):ValidationResult {
        if (!control.value.match(/^123/)) {
            return {invalidSku: true};
        }
    }




}