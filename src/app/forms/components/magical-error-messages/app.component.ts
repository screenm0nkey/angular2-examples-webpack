import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  styles : [],
  template: `
    <h4>Generic method that displays validation errors in Angular’s form</h4>
    <dlink id="89"></dlink>

    <p>Don't fill anything out and press submit to see error messages</p>
    
    <form [formGroup]="form">
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
          </div>
        </div>
      </div>

      <div class="control">
        <button class="button is-link is-small">Submit</button>
      </div>
    </form>
  `,
})
export class FormErrorAppComponent {
  form: FormGroup;
  control: FormControl;
  customErrors = { required: 'Please accept the terms' }
  
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.control = this.builder.control('', Validators.required);

    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      terms: ['', Validators.requiredTrue],
      address: this.builder.group({
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }
}
