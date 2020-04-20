import { Component } from '@angular/core';

@Component({
  selector: 'main-eleven',
  template: `
    <h4>Dynamic reactive forms in Angular</h4>
    <dlink id="88"></dlink>
    <dynamic-form-eleven [formDataObj]="person"></dynamic-form-eleven>
  `
})
export class FormElevenComponent {
  person = {
    firstname: {
      label: 'Firstname',
      value: 'Juri',
      type: 'text',
      validators: {
        required: true
      }
    },
    age: {
      label: 'Age',
      value: 32,
      type: 'number',
      validators: {
        min: 18
      }
    },
    gender: {
      label: 'Gender',
      value: 'F',
      type: 'radio',
      options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]
    },
    city: {
      label: 'City',
      value: 'LA',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' },
        { label: 'Salt Lake City', value: 'SLC' }
      ]
    }
  };
}

