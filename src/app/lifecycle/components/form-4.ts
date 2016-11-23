import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'form-four',
  template: require('./form-4.html')
})

export class FormFourComponent {
  myform: FormGroup;
  payLoad: String = '';
  cities: any[] = [{name: 'London'}, {name: 'Berlin'}, {name: 'Rotheram'}];
  selectedCity;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.selectedCity = this.cities[2];
    // calling fb.group() returns a controlGroup
    this.myform = this.formBuilder.group({
      "checkMe": [true, Validators.required],
      "firstName": ['', Validators.required],
      "streetAddress": ['', Validators.required],
      "zip": ['', Validators.compose([this.zipValidator])],
      "type": ['home'],
      "city": []
    });
  }

  logit(evt, ngForm, myform) {
    console.log('ngForm', ngForm.form);
    console.log('myform', myform);
    console.log(this.selectedCity)
  }


  zipValidator(zip: FormControl): { [s: string]: boolean } {
    let valid = /^\d{5}$/.test(zip.value);
    if (valid) {
      return null;
    }
    return {"invalidZip": true};
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.myform.value);
  }
}

//this.registerForm.controls.address.controls.street.valid
