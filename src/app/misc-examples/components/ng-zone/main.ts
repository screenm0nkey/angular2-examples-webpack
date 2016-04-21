import { Component } from 'angular2/core';
import {NgZoneDemo} from './runoutside'

@Component({
    selector: 'ngzone-main-component',
    template: `<ng-zone-demo></ng-zone-demo>`,
    directives:[NgZoneDemo]
})
export class NgZoneMainComponent {
    constructor() {
        console.log(this);
    }
}