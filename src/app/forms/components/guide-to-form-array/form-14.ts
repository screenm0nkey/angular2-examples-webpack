import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-fourteen',
  template: `
  <p class="path">forms/components/guide-to-form-array/form-14.ts</p>

  <h5>Using formGroupName directive for a FormGroup in a FormArray</h5>

  <p>Directives used: <code> formGroup, formControlName, formArrayName, formGroupName</code></p>
  
  <form [formGroup]="user">
    <input formControlName="name" />

    <ng-container formArrayName="skills">
      <div *ngFor="let _ of skills.controls; index as i">
        <ng-container [formGroupName]="i">
          <input formControlName="name" />
          <input formControlName="level" />
          <input formControlName="age" />
        </ng-container>
      </div>
    </ng-container>
  </form>
  `
})
export class FormFourteenComponent {
  user = new FormGroup({
    name: new FormControl('Mike'),
    skills: new FormArray([
      new FormGroup({
        name: new FormControl('Sarah'),
        level: new FormControl('Trevor'),
        age: new FormControl(36),
      })
    ])
  });

  skills = this.user.get('skills') as FormArray;
}
