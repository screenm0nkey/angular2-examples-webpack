import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-thirteen',
  template: `
  <p class="path">forms/components/guide-to-form-array/form-13.ts</p>

  <h5>Using a FormArray in a FormGroup</h5>

  <p>Directives used:  <code>formGroup, formControlName, formArrayName</code></p>

  <form [formGroup]="userForm">
    <input formControlName="name" />
    <ng-container formArrayName="skillz">
      <div *ngFor="let _ of targetSkillz.controls; index as i">
        <input [formControlName]="i" />
      </div>
    </ng-container>
  </form>
  `
})
export class FormThirteenComponent {
  userForm = new FormGroup({
    name: new FormControl('Liz'),
    skillz: new FormArray([
      new FormControl('Simon'),
      new FormControl('Mark')
    ])
  });

  targetSkillz = this.userForm.get('skillz') as FormArray;
}
