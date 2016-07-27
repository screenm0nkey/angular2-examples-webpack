import { Component } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'my-app',
    template: require('./form-9.html'),
    styles : [require('./form-9.css')],
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers:  []
})
export class FormNine {
    form: FormGroup;
    myModel:any;

    constructor() {
        // initializing a model for the form to keep in sync with.
        // usually you'd grab this from a backend API
        this.myModel = {
            name: "Joanna Jedrzejczyk",
            payOffs: [
                {amount: 111.11, date: "Jan 1, 2016", final: false},
                {amount: 222.22, date: "Jan 2, 2016", final: true}
            ]
        };

        // initialize form with empty FormArray for payOffs
        this.form = new FormGroup({
            name: new FormControl(''),
            payOffs: new FormArray([])
        });

        // now we manually use the model and push a FormGroup into the form's FormArray for each PayOff
        this.myModel.payOffs.forEach(
            (po) =>
                this.form.controls.payOffs.push(this.createPayOffFormGroup(po))
        );
    }

    createPayOffFormGroup(payOffObj) {
        console.log("payOffObj", payOffObj);
        return new FormGroup({
            amount: new FormControl(payOffObj.amount),
            date: new FormControl(payOffObj.date),
            final: new FormControl(payOffObj.final)
        });
    }

    addPayOff(event) {
        event.preventDefault(); // ensure this button doesn't try to submit the form
        var emptyPayOff = {amount: null, date: null, final: false};

        // add pay off to both the model and to form controls because I don't think Angular has any way to do this automagically yet
        this.myModel.payOffs.push(emptyPayOff);
        this.form.controls.payOffs.push(this.createPayOffFormGroup(emptyPayOff));
        console.log("Added New Pay Off", this.form.controls.payOffs)
    }

    deletePayOff(index:number) {
        // delete payoff from both the model and the FormArray
        this.myModel.payOffs.splice(index, 1);
        this.form.controls.payOffs.removeAt(index);
    }
}
