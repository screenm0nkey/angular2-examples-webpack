import {Component, Directive, HostBinding, ElementRef} from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  NgModel
} from '@angular/forms';

@Directive({selector: '[ngModel]'})
class NgModelStatus {
  constructor(public el:ElementRef,  public control:NgModel) {
    //el is the element the directive is applied too.
  }
  @HostBinding('class.YES') get valid() {
    console.log(this);
    return this.el.nativeElement.className.indexOf('ng-valid') > 0;
  }
}


@Component({
  selector: 'host-three-component',
  directives: [REACTIVE_FORM_DIRECTIVES, NgModelStatus],
  providers: [FormBuilder],
  styles: [`.ng-invalid {border:solid 1px red;}`],
  template: `
        <a href="https://angular.io/docs/ts/latest/api/core/index/HostBinding-var.html" target="_blank">
            HostBinding
        </a>
        <form [formGroup]="myForm">
              <pre>Input<span *ngIf="!myForm.controls.checkme.valid"> NOT</span> valid</pre>
            <input [(ngModel)]="prop" placeholder="minLength 3" formControlName="checkme">
        </form>
    `
})
export class HostThree {
  myForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      "checkme": ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])]
    });
  }
}

