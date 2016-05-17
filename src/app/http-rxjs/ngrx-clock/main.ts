import {Component} from '@angular/core';
import {NgRxClockApp} from './example-clock-one';
import {NgRxClock2} from './example-clock-two';


@Component({
    selector: 'app',
    directives : [NgRxClockApp, NgRxClock2],
    template: `
        <clock-one></clock-one>
        <hr>
        <clock-two></clock-two>
    `
})
export class MainClocks {
}




