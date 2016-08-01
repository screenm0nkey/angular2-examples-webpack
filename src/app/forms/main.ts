import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import routes from './routes';

@Component({
    selector: 'app-component',
    styles: [require('../../styles/layout.css')],
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="miscellaneous">
            <nav>
                <a [routerLink]="['/form', 'form-one']" [routerLinkActive]="['active']">Form 1 - Template driven not using ngForm</a>
                <a [routerLink]="['/form', 'form-two']" [routerLinkActive]="['active']">Form 2 - Template driven using ngForm, ngModel, ngModelGroup</a>
                <a [routerLink]="['/form', 'form-three']" [routerLinkActive]="['active']">Form 3 Model driven - FormGroup and FormControl, formGroup, formGroupName and formControlName</a>
                <a [routerLink]="['/form', 'form-four']" [routerLinkActive]="['active']">Form 4 - Model-driven - FormBuilder, formGroup, formGroupName and formControlName</a>
                <a [routerLink]="['/form', 'form-five']" [routerLinkActive]="['active']">Form 5 - Model driven observing changes using valueChanges.subscribe()</a>
                <a [routerLink]="['/form', 'form-six']" [routerLinkActive]="['active']">Form 6 Asynchonous form validation</a>
                <a [routerLink]="['/form', 'form-seven']" [routerLinkActive]="['active']">Form 7 - Custom validator directives for Template driven forms</a>
                <a [routerLink]="['/form', 'form-eight']" [routerLinkActive]="['active']">Form 8 - Dynamic Form</a>
                <a [routerLink]="['/form', 'form-nine']" [routerLinkActive]="['active']">Form 9 - Dynamic Nested Form elements</a>
                <a [routerLink]="['/form', 'form-ten']" [routerLinkActive]="['active']">Ten</a>
            </nav>
            <div id="container">
                <a href="http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/" target="_blank">The Ultimate Guide to Forms</a>
                <a href="http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html" target="_blank">Template-driven Forms</a>
                <a href="http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html">Custom Validators in Angular 2</a>
                <hr>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class FormExamplesMain {
    constructor() {
        console.log(this);
    }
}

export default routes;


