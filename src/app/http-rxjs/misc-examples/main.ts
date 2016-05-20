import {Component} from '@angular/core';
import {CounterComponent} from './rx-counter';
import {PromiseExample} from './promise';
import {SubscribeExample} from './subscribe';
import {NgRxStarterApp} from './ngrx-starter';

@Component({
    selector: 'misc-http-component',
    template: `
        <counter-component></counter-component>
        <hr>
        <promise-example></promise-example>  
        <hr>
        <subscribe-example></subscribe-example>
        <hr>
        <ngrx-stater-app></ngrx-stater-app>
    `,
    directives: [
        CounterComponent,
        PromiseExample,
        SubscribeExample,
        NgRxStarterApp
    ]
})
export class MiscHttpExamples {
    constructor() {
        console.log(this);
    }
}


