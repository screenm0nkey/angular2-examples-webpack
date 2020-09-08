import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  styles: [],
  template: `
    <p class="path">src/app/forms/components/custom-error-messages/generic-form.component.ts</p>
    <h4>Generic method that dynamically generates and displays validation errors in Angular’s form</h4>
    <dlink id="89"></dlink>

    <ul>
      <li class="strong">Files used in this example</li>
      <li>generic-form.component.ts - standard form to showcase the custom error example</li>
      <li>form-submit.directive.ts - Binds itself to the submit event and adds 'submitted' class to the form</li>
    </ul>
    
    
    <form [formGroup]="myform">
      <div class="field">
        <div class="control">
          <input class="input" formControlName="name" placeholder="Name">
        </div>
      </div>

      <div class="field">
        <div class="control" controlErrorContainer>
          <label class="checkbox">
          <input type="checkbox" formControlName="terms" [customErrors]="customErrors">
          I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div formGroupName="address" class="field">
        <div class="field">
          <div class="control">
            <input class="input" formControlName="city" placeholder="City">
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input class="input" formControlName="country" placeholder="Country">
          </div>link
        </div>
      </div>

      <div class="control">
        <button class="button is-link is-small">Submit</button>
      </div>
    </form>
  `,
})
export class FormErrorAppComponent {
  myform: FormGroup;
  control: FormControl;
  customErrors = { required: 'Please accept the terms' }

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.control = this.builder.control('', Validators.required);

    this.myform = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      terms: ['', Validators.requiredTrue],

      address: this.builder.group({
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }
}
