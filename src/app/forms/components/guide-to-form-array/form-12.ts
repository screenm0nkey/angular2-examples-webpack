import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-twelve',
  template: `
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

      <div *ngFor="let control of myformControls.controls; index as i">
        <input [formControl]="myformControls.controls[i]" />
        <button (click)="removeFormControl(i)">X</button>
      </div>

      <pre>{{myformControls.value|json}}</pre>
    </section>
   
  `
})
export class FormTwelveComponent {
  myformControls = new FormArray([]);
  items: number[] = [];

  updateCount() {
    this.items = [];
    for (let i = 0; i < this.myformControls.length; i++) {
      this.items.push(i + 1);
    }
  }

  addFormControl() {
    this.myformControls.push(new FormControl(''));
    this.updateCount();
  }

  removeFormControl(index: number) {
    this.myformControls.removeAt(index);
    this.updateCount();
  }

  prepend() {
    this.myformControls.insert(0, new FormControl(''));
    this.updateCount();
  }

  clear() {
    this.myformControls.clear();
    this.updateCount();
  }

  replace(value: string) {
    const num = Number(value) - 1;
    this.myformControls.setControl(num, new FormControl(''));
  }
}
