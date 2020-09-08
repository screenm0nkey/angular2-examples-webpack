import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-twelve',
  template: `
      <p class="path">forms/components/guide-to-form-array/form-12.ts</p>
      
      <h5>Adding FormControl to a FormArray with the [formControl] Directive</h5>

      <p>Directives used: <code>formControl</code></p>
      
      <section>
        <button (click)="clear()">Clear All FormControls</button> |
        <button (click)="addFormControl()">Add FormControl</button> |
        <button (click)="prepend()">Prepend FormControl</button> |
        <button (click)="replace(sel.value)">Replace FormControl</button>
        <select #sel>
          <option *ngFor="let o of items" [value]="o">{{o}}</option>
        </select>

      <div *ngFor="let control of myFormArray.controls; index as i">
        <input [formControl]="myFormArray.controls[i]" />
        <button (click)="removeFormControl(i)">X</button>
      </div>

      <pre>{{myFormArray.value|json}}</pre>
    </section>
   
  `
})
export class FormTwelveComponent {
  myFormArray = new FormArray([]);
  items: number[] = [];

  updateCount() {
    this.items = [];
    for (let i = 0; i < this.myFormArray.length; i++) {
      this.items.push(i + 1);
    }
  }

  addFormControl() {
    this.myFormArray.push(new FormControl(''));
    this.updateCount();
  }

  removeFormControl(index: number) {
    this.myFormArray.removeAt(index);
    this.updateCount();
  }

  prepend() {
    this.myFormArray.insert(0, new FormControl(''));
    this.updateCount();
  }

  clear() {
    this.myFormArray.clear();
    this.updateCount();
  }

  replace(value: string) {
    const num = Number(value) - 1;
    this.myFormArray.setControl(num, new FormControl(''));
  }
}
