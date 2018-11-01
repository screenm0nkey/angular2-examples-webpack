import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {createCounterRangeValidator} from './custom-form-control';

@Component({
  selector: 'model-driven',
  template: `
    <h4>Using it inside model-driven forms</h4>
    
    <form [formGroup]='form'>
      <p>ngModel value: {{outerCounterValue}}</p>
      <counter-input
        formControlName='counter1'
        [(ngModel)]='outerCounterValue'>
      </counter-input>
      <br>
      <counter-input
        formControlName='counter2'
        [counterRangeMax]='maxValue'
        [counterRangeMin]='minValue'
        [counterValue]='50'
        ></counter-input>
    </form>
    
    <p *ngIf='!form.valid'>Counter is invalid!</p>
    <pre>{{ form.value | json }}</pre>
  `
})
export class FormTenModelDrivenComponent implements OnInit {
  form: FormGroup;
  outerCounterValue: number;
  maxValue: number = 7;
  minValue: number = 3;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      counter1: [5, createCounterRangeValidator(7, 3)],
      counter2: 4
    });
  }
}
