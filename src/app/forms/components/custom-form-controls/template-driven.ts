import { Component } from '@angular/core';

@Component({
  selector: 'template-driven',
  template: `
    <h4>Using it inside template-driven forms using [(ngModel)] </h4>
     <dlink [id]="31"></dlink>
     
     
    <p>These are the min max values for the custom for control. the they become invalid. try changing the values and increasing the </p>
    <div>
      <label>Change min value:</label>
      <input type='number' [(ngModel)]='minValue'>
    </div>
    <div>
      <label>Change max value:</label>
      <input type='number' [(ngModel)]='maxValue'>
    </div>
    
    <form #form='ngForm'>
        <label for='counter1'>Without model initialization</label>
        <custom-range-form-item 
            name='counter1'
            [counterRangeMax]='maxValue'
            [counterRangeMin]='minValue'
             ngModel>
        </custom-range-form-item>
        <br>
        
        <label for='counter2'>Model initialization with property binding</label>
        <custom-range-form-item 
            name='counter2'
            [counterRangeMax]='maxValue'
            [counterRangeMin]='minValue'
            [ngModel]='counter2Value'>
        </custom-range-form-item>
        <br>
        
        <label for='counter3'>Model initialization with property binding</label>
        <custom-range-form-item 
            name='counter3' 
            [counterRangeMax]='maxValue'
            [counterRangeMin]='minValue'
            [(ngModel)]='counter3Value'></custom-range-form-item>
        <span>ngModel value: {{counter3Value}}</span>
    </form>

    <pre>{{ form.value | json }}</pre>
  `
})
export class FormTenTemplateDrivenComponent {
  counter2Value: number = 5;
  counter3Value: number = 5;
  minValue: number = 0;
  maxValue: number = 12;
}
