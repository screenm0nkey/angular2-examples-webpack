import {Component} from '@angular/core';
import {CounterComponent} from './rx-counter';
import {PromiseExample} from './promise';
import {SubscribeExample} from './subscribe';

@Component({
    selector: 'misc-http-component',
    template: `
        <counter-component></counter-component>
        <promise-example></promise-example>  
        <subscribe-example></subscribe-example>
    `,
    directives: [
        CounterComponent,
        PromiseExample,
        SubscribeExample
    ]
})
export class MiscHttpExamples {
    constructor() {
        console.log(this);
    }
}


