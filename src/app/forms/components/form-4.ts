import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type city = { name: string }

@Component({
  selector: 'form-four',
  templateUrl: './form-4.html'
})
export class FormFourComponent implements OnInit {
  myform: FormGroup;
  showPayload: boolean;
  cities: city[];
  selectedCity: city;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.cities = [
      { name: 'London' },
      { name: 'Berlin' },
      { name: 'Rotheram' }
    ];
    this.selectedCity = this.cities[2];
    // calling fb.group() returns a controlGroup
    this.myform = this.formBuilder.group({
      checkMe: [true, Validators.required],
      firstName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      zip: ['', Validators.compose([this.zipValidator])],
      type: ['home'],
      city: []
    });
  }

  logit(evt, ngForm, myform) {
    console.log('ngForm', ngForm.form);
    console.log('myform', myform);
    console.log(this.selectedCity);
  }

  zipValidator(zip) {
    let valid = /^\d{5}$/.test(zip.value);
    if (valid) {
      return null;
    }
    return { invalidZip: true };
  }

  onSubmit() {
    this.showPayload = true;
    
  }
}

// this.registerForm.controls.address.controls.street.valid
