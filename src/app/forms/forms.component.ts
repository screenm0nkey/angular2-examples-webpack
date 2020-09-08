import { Component } from '@angular/core';

@Component({
  styles: ['router-outlet {display: none}', 'ul li {margin-bottom:20px; list-style: decimal;}'],
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
        <a routerLink='./form-tips' routerLinkActive='active'>Form 20 - Tips and Tricks</a>
        <a routerLink='./sub-forms' routerLinkActive='active'>Reactive Sub-Forms</a>
      </nav>

      <div class="ngx-container">
        <div class='comps'>
        <collapse-it>
        <section>
          <h4>Form Notes</h4>

          <ul>
            <li>
              Reactive angular forms are forms which use <code>AbsractControl</code>s to create forms.
            </li>
            <li>
              Angular comes with <highlight> three different ways of building forms</highlight> in our applications. <br>
              <highlight>template-driven</highlight> approach which uses <code>[(ngModel)]</code> and allows us to build forms with very little to none application code required. <br>
              <highlight>model-driven </highlight> or reactive approach using low level APIs, which makes our forms testable without a DOM being required <br>
              <highlight>FormBuilder API </highlight> this is model-driven but with a higher level API called the FormBuilder
            </li>
            <li>Angular reactive forms are NOT type safe by default! See <dlink id="96"></dlink> on how to fix this</li>
            <li>external
              Forms are made up of <code>AbsractControl</code> such as <code>FormGroup</code>, <code>FormControl</code> or <code>FormArray</code><br>
              We can combine these controls to create forms, as seen in <a routerLink='./guide-to-form-array' routerLinkActive='active'>Form 12-16 - Guide to working with FormArray</a>
            </li>

            <li>Reactive forms API Classes are AbstractControl, FormControl, FormGroup FormArray, FormBuilder <dlink id="98"></dlink></li>
            <li>Reactive forms Directives are formArrayName, formGroupName, formControl, formControlName, formGroup	            </li>

            <li>You can stop a form from emitting the valueChanges by using <code>this.form.patchValue(value,  emitEvent: false )</code></li>

          </ul>
          
        </section>
        </collapse-it>



        


       

          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
 `
})
export class FormExamplesComponent {
}
