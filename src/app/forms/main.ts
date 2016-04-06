import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, AsyncRoute, Route, Router, RouterOutlet, RouteConfig, RouterLink, RouteParams, RouteData, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {Form1} from './form1';
import {Form2} from './form2';
import {Form3} from './form3';
import {Form4} from './form4';
import {Form5} from './form5';
import {InputControls} from './input-controls';


@Component({
    selector: 'app-component',
    template: require('./main.html'),
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
export class FormExamples {
    constructor() {
        console.log(this);
    }
}