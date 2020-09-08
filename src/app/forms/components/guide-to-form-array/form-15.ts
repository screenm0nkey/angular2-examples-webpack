import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-fifteen',
  template: `
  <p class="path">src/app/forms/components/guide-to-form-array/form-15.ts</p>

  <h5>FormArray Validation</h5>

  <p>Directives used:  <code>formGroup, formControlName, formArrayName</code></p>
  
  <p>Add form control and then type value and remove it and you see the validation</p>
  
  <button (click)="addFormControl()">Add FormControl</button>
  
  <form [formGroup]="user">
    <input formControlName="name" />
    <ng-container formArrayName="skills">
      <div *ngFor="let _ of skills.controls; index as i">
        <input [formControlName]="i" />
      </div>
    </ng-container>
  </form>
  `
})
export class FormFifteenComponent {
  user = new FormGroup({
    name: new FormControl('Nick'),
    skills: new FormArray([], validateSize)
  });

  skills = this.user.get('skills') as FormArray;

  addFormControl() {
    const control = new FormControl('', Validators.required);
    this.skills.push(control);
  }
}

function validateSize(arr: FormArray) {
  return arr.length > 3 ? {
    invalidSize: true
  } : null;
}
