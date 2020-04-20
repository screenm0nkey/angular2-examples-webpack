import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createCounterRangeValidator } from './dynamic-counter-range-validator';

@Component({
  selector: 'model-driven',
  template: `
    <h4>Using it with model-driven FormBuilder forms</h4>
    <p class="path"></p>

    <form [formGroup]='form'>
      <custom-range-form-item
        formControlName='counter1'>
      </custom-range-form-item>
    
      <br>
    
      <custom-range-form-item
        formControlName='counter2'
        [counterRangeMax]='maxValue'
        [counterRangeMin]='minValue'
        ></custom-range-form-item>
    </form>
    
    <p class="red" *ngIf='!form.valid'>Counter is invalid!</p>
    <pre>{{ form.value | json }}</pre>
  `
})
export class FormTenModelDrivenComponent implements OnInit {
  form: FormGroup;
  outerCounterValue: number;
  maxValue: number;
  minValue: number;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.maxValue = 7;
    this.minValue = 3;
    this.form = this.formBuilder.group({
      counter1: [6, createCounterRangeValidator(this.maxValue, this.minValue)],
      counter2: 4
    });
    console.log(this.form)
  }
}
