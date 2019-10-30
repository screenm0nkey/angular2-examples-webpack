import {Component} from '@angular/core';

@Component({
  styles: ['router-outlet {display: none}'],
  template: `
  <div class='miscellaneous'>
      <nav>
        <a routerLink='./form-one' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Form 1 - Template driven not using ngForm</a>
        <a routerLink='./form-two' routerLinkActive='active'>Form 2 - Template driven using ngForm, ngModel, ngModelGroup</a>
        <a routerLink='./form-three' routerLinkActive='active'>Form 3 Model driven - FormGroup and FormControl, formGroup, formGroupName and formControlName</a>
        <a routerLink='./form-four' routerLinkActive='active'>Form 4 - Model-driven - FormBuilder, formGroup, formGroupName Custom Validator and formControlName</a>
        <a routerLink='./form-five' routerLinkActive='active'>Form 5 - Model driven observing changes using valueChanges.subscribe()</a>
        <a routerLink='./form-six' routerLinkActive='active'>Form 6 Asynchonous form validation</a>
        <a routerLink='./form-seven' routerLinkActive='active'>Form 7 - Custom validator directives for Template driven forms</a>
        <a routerLink='./form-eight' routerLinkActive='active'>Form 8 - Dynamic forms</a>
        <a routerLink='./form-nine' routerLinkActive='active'>Form 9 - Dynamic nested form elements [(ngModel)]</a>
        <a routerLink='./form-ten' routerLinkActive='active'>Form 10 - Custom form controls</a>
      </nav>
      <div class="ngx-container">
        <div class='comps'>
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
