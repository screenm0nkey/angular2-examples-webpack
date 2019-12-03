import {Component, Directive, ElementRef, HostBinding} from '@angular/core';
import {FormBuilder, FormGroup, NgModel, Validators} from '@angular/forms';

@Directive({selector: '[ngModel]'})
export class NgModelStatusThree {
  private isFixed : boolean;
  // el is the element the directive is applied too.
  constructor(public el: ElementRef, public control: NgModel) {
    this.isFixed = true;
  }

  @HostBinding('class.YES')
  get valid() {
    return this.el.nativeElement.className.indexOf('ng-valid') > 0;
  }

}

@Component({
  selector: 'host-three-component',
  styles: [`
    .ng-invalid {border: solid 3px red;}
    .YES {border: solid 4px green;}
  `],
  template: `
    <p class='file'>misc-examples/components/host-binding/host-three.ts</p>
    <h4>Using @HostBinding and [ngModel] @Directive</h4>
    <dlink [id]="69"></dlink>

    <form [formGroup]='myForm'>
      <code>Input<span *ngIf='!myForm.controls.checkme.valid'> NOT</span> valid</code>
      <input placeholder='minLength 3' formControlName='checkme'>
    </form>
  `
})
export class HostThree {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      checkme: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });
  }
}
