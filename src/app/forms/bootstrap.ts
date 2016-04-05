import { bootstrap } from 'angular2/platform/browser';
import { bind , Component } from 'angular2/core';
import { FORM_PROVIDERS } from "angular2/common";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, AsyncRoute, Route, Router, RouterOutlet, RouteConfig, RouterLink, RouteParams, RouteData, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import {Form1} from './form1';
import {Form2} from './form2';
import {Form3} from './form3';
import {Form4} from './form4';
import {Form5} from './form5';
import {InputControls} from './input-controls';


@Component({
    selector: 'app-component',
    template: `
         <nav>
             <a [routerLink]="['/InputControls']">No Form</a>
             <a [routerLink]="['/Form1']">Form 1</a>
             <a [routerLink]="['/Form2']">Form 2</a>
             <a [routerLink]="['/Form3']">Form 3</a>
             <a [routerLink]="['/Form4']">Form 4</a>
             <a [routerLink]="['/Form5']">Form 5</a>
         </nav>
         <a href="http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/" target="_blank">The Ultimate Guide to Forms</a> | 
         <a href="http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html" target="_blank">Template-driven Forms</a>
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, RouterLink, Form1, Form2, Form3, Form4, InputControls]
})
@RouteConfig([
    {path: '/', component: InputControls, name: 'InputControls', useAsDefault: true},
    {path: '/form1', component: Form1, name: 'Form1'},
    {path: '/form2', component: Form2, name: 'Form2'},
    {path: '/form3', component: Form3, name: 'Form3'},
    {path: '/form4', component: Form4, name: 'Form4'},
    {path: '/form5', component: Form5, name: 'Form5'}

])
export class AppComponent {
    constructor() {
        console.log(this);
    }
}


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);


/*
 <!--<input-controls></input-controls>-->
 <!--<form-one></form-one>-->
 <!--<form-two></form-two>-->
 <!--<form-three></form-three>-->
 <form-four></form-four>
 */