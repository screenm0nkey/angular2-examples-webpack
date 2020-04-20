import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-thirteen',
  template: `
  <h5>Using a FormArray in a FormGroup</h5>

  <p>Directives used:  <code>formGroup, formControlName, formArrayName</code></p>

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
export class FormThirteenComponent {
  user = new FormGroup({
    name: new FormControl('Liz'),
    skills: new FormArray([
      new FormControl('Simon'),
      new FormControl('Mark')
    ])
  });

  skills = this.user.get('skills') as FormArray;
}
