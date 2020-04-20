import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-five',
  templateUrl: './form-5.html'
})
export class FormFiveComponent {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;
  payLoad: Object = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // 'Validators.compose' is used to add multiple validators to a control
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      sku: ['', Validators.compose([Validators.required, this.skuValidator])], // uses formbuilder control
      pku: ['12', Validators.required], // uses the NgFormControl directive export
      productName: ['', Validators.required] // uses ng-model
    });

    // assigning 'sku' here means we can do this in the form; <input [FormControl]='sku'>
    this.sku = this.myForm.controls['sku'];

    // rxjs observables can be used for keyup validation
    this.sku.valueChanges.subscribe({
      next: value => {
        console.log('sku changed to: ', value);
      }
    });
    // the subscribe method takes an object or function as callback
    this.myForm.valueChanges.subscribe(value =>
      console.log('form changed to: ', value)
    );
    // window.myForm = this;
    console.log(this);
  }

  onSubmit(value: Object) {
    console.log('you submitted value: ', value);
    this.payLoad = value;
  }

  // Custom validator
  skuValidator(control: FormControl): any {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }
}
