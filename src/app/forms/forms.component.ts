import { Component } from '@angular/core';

@Component({
  styles: ['router-outlet {display: none}'],
  template: `
  <div class='miscellaneous'>
      <nav>
        <a routerLink='./form-one' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Form 1 - Template driven not using ngForm</a>
        <a routerLink='./form-two' routerLinkActive='active'>Form 2 - Template driven using ngForm, ngModel, ngModelGroup</a>
        <a routerLink='./form-nine' routerLinkActive='active'>Form 9 - Template driven dynamic nested form with FormArray</a>
        <a routerLink='./form-three' routerLinkActive='active'>Form 3 Model driven - FormGroup and FormControl, formGroup, formGroupName and formControlName</a>
        <a routerLink='./form-four' routerLinkActive='active'>Form 4 - Model-driven - FormBuilder, formGroup, formGroupName Custom Validator and formControlName</a>
        <a routerLink='./form-five' routerLinkActive='active'>Form 5 - Model driven observing changes using valueChanges.subscribe()</a>
        <a routerLink='./form-six' routerLinkActive='active'>Form 6 Asynchonous form validation</a>
        <a routerLink='./form-seven' routerLinkActive='active'>Form 7 - Custom validator directives with dependancies for Template driven forms</a>
        <a routerLink='./form-eleven' routerLinkActive='active'>Form 11 - Dynamic reactive forms</a>
        <a routerLink='./form-eight' routerLinkActive='active'>Form 8 - Dynamic reactive forms</a>
        <a routerLink='./form-ten' routerLinkActive='active'>Form 10 - Custom form controls</a>
        <a routerLink='./guide-to-form-array' routerLinkActive='active'>Form 12-16 - Guide to working with FormArray</a>
        <a routerLink='./form-errors' routerLinkActive='active'>Dynamically generated validation error messages</a>
      </nav>

      <div class="ngx-container">
        <div class='comps'>
        <p>Angular comes with <highlight>
          three different ways of building forms
        </highlight> in our applications.
        There’s the <highlight>
          template-driven
        </highlight> approach which uses <code>[(ngModel)]</code> and allows us to build forms with very little to none application code required.
        <br>Then there’s the <highlight>
          model-driven
        </highlight> or reactive approach using low level APIs, which makes our forms testable without a DOM
        being required, and last but not least, we can build our forms <highlight>
          model-driven but with a higher level API called the FormBuilder
        </highlight>.</p>

        <p>As you probably know, when we create an <code>AbsractControl</code> such as <code>FormGroup</code>, <code>FormControl</code> or <code>FormArray</code>, we can use an array as our value. </p>


          <div class='links'>
              <dlink [id]="28"></dlink>
              <dlink [id]="29"></dlink>
              <dlink [id]="30"></dlink>
          </div>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
 `
})
export class FormExamplesComponent {
}
