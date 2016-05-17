import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import {Form1} from './other-forms/form1';
import {Form2} from './other-forms/form2';
import {Form3} from './other-forms/form3';
import {Form4} from './other-forms/form4';
import {Form5} from './other-forms/form5';
import {InputControls} from './other-forms/input-controls';
import {SurveyDemo} from './dynamic-form/survey-demo.component';


@Component({
    selector: 'app-component',
    styles : [require('../layout.css')],
    template: require('./main.html'),
    directives: [ROUTER_DIRECTIVES, Form1, Form2, Form3, Form4, InputControls]
})
@RouteConfig([
    {path: '/', component: InputControls, name: 'InputControls', useAsDefault: true},
    {path: '/form1', component: Form1, name: 'Form1'},
    {path: '/form2', component: Form2, name: 'Form2'},
    {path: '/form3', component: Form3, name: 'Form3'},
    {path: '/form4', component: Form4, name: 'Form4'},
    {path: '/form5', component: Form5, name: 'Form5'},
    {path: '/dynamic', component: SurveyDemo, name: 'Dynamic'}

])
export class FormExamples {
    constructor() {
        console.log(this);
    }
}
