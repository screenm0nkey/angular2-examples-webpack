import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './form-9.html',
  styleUrls: ['./form-9.css']
})
export class FormNineComponent {
  form: FormGroup; // This is a an AbstractControl
  payOffsFormArray: FormArray;
  myModel: any;

  constructor() {
    // initializing a model for the form to keep in sync with.
    // usually you'd grab this from a backend API
    this.myModel = {
      name: 'Joanna Jedrzejczyk',
      payOffs: [
        { amount: 111.11, date: 'Jan 1, 2016', number: 3, final: false },
        { amount: 222.22, date: 'Jan 2, 2016', number: 11, final: true }
      ]
    };

    this.payOffsFormArray = new FormArray([]);

    // initialize form with empty FormArray for payOffs
    this.form = new FormGroup({
      name: new FormControl(''),
      payOffs: this.payOffsFormArray
    });

    // now we manually use the model and push a FormGroup into the form's FormArray for each PayOff
    this.myModel.payOffs.forEach(po =>
      this.payOffsFormArray.push(this.createPayOffFormGroup(po))
    );
  }

  createPayOffFormGroup(payOffObj) {
    return new FormGroup({
      amount: new FormControl(payOffObj.amount),
      date: new FormControl(payOffObj.date),
      number: new FormControl(payOffObj.number),
      final: new FormControl(payOffObj.final)
    });
  }

  addPayOff(event) {
    event.preventDefault(); // ensure this button doesn't try to submit the form
    const emptyPayOff = { amount: null, date: null, final: false };

    // add pay off to both the model and to form controls because
    // I don't think Angular has any way to do this automagically yet
    this.myModel.payOffs.push(emptyPayOff);
    this.payOffsFormArray.push(this.createPayOffFormGroup(emptyPayOff));
    console.log('Added New Pay Off', this.payOffsFormArray);
  }

  deletePayOff(index: number) {
    // delete payoff from both the model and the FormArray
    this.myModel.payOffs.splice(index, 1);
    this.payOffsFormArray.removeAt(index);
  }
}
