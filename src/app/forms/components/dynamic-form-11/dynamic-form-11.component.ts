import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-eleven',
  template: `
    <form [formGroup]="myDynamicForm">
      <div *ngFor="let prop of personProps">
        <label>{{ prop.label }}:</label>

        <div [ngSwitch]="prop.type">
          <input *ngSwitchCase="'text'" [type]="prop.type" [formControlName]="prop.key">
          <input *ngSwitchCase="'number'" [type]="prop.type" [formControlName]="prop.key">

          <div *ngSwitchCase="'radio'">
            <label *ngFor="let option of prop.options">
              <input type="radio"
                [name]="prop.key"
                [formControlName]="prop.key"
                [value]="option.value">

              {{ option.label }}
            </label>
          </div>

          <select *ngSwitchCase="'select'" [formControlName]="prop.key">
            <option *ngFor="let option of prop.options" [value]="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="error" *ngIf="myDynamicForm.get(prop.key).invalid && (myDynamicForm.get(prop.key).dirty || myDynamicForm.get(prop.key).touched)">
          <p *ngIf="myDynamicForm.get(prop.key).errors.required">
            You have to provide a value.
          </p>
          <p *ngIf="myDynamicForm.get(prop.key).errors.min">
            You have to provide a value greater or equal to {{ myDynamicForm.get(prop.key).errors.min.min }}
          </p>
        </div>

      </div>
    </form>
    <pre>{{ myDynamicForm.value | json }}</pre>
  `,
  styles: [
    `
    .error p {
      color: red;
    }
  `
  ]
})
export class DynamicFormElevenComponent implements OnInit {
  myDynamicForm: FormGroup;
  @Input() formDataObj;
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(
        this.formDataObj[prop].value,
        this.mapValidator(this.formDataObj[prop].validators)
      );

      this.personProps.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options
      });
    }

    this.myDynamicForm = new FormGroup(formDataObj);
  }

  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'min') {
          return Validators.min(validators[validationType]);
        }
      });
    } else {
      return [];
    }
  }
}
