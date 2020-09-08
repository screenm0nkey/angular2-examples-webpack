import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-sixteen',
  template: `
    <p class="path">src/app/forms/components/guide-to-form-array/form-16.ts</p>

      <h5>Adding a FormGroup to a FormArray with the [formGroup] Directive</h5>

      <p>Directives used: <code>formGroup, formControlName</code></p>

      <button (click)="addFormGroup()">Add FormGroup</button>

      <div *ngFor="let skill of myformGroups.controls;">
        <ng-container [formGroup]="skill">
          Level <input formControlName="level" /> <br>
          Name <input formControlName="name" />
        </ng-container>
      </div>

      <pre>{{myformGroups.value|json}}</pre>
  `
})
export class FormSixteenComponent {
  myformGroups = new FormArray([]);

  addFormGroup() {
    const group = new FormGroup({
      level: new FormControl(''),
      name: new FormControl('')
    });
    this.myformGroups.push(group);
  }
}
