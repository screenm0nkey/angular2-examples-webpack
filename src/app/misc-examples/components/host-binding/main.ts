import {Component} from 'angular2/core'
import { HostOne } from './host-one';
import { HostTwo } from './host-two';
import { HostThree } from './host-three';

@Component({
    selector: 'host-stuff-component',
    styles : [`h4 {font-weight: bold;color:darkred}`],
    template: `
        <pre><h2>@HostListener @HostBinding</h2></pre>
        <hr>
        <h4>host-one-component @HostBinding</h4>
        <host-one-component></host-one-component>
        <hr>
        <h4>host-two-component @HostListener</h4>
        <host-two-component></host-two-component>
        <hr>
        <h4>host-three-component</h4>
        <host-three-component></host-three-component>

    `,
    directives: [HostOne, HostTwo, HostThree]
})
export class HostStuffComponent {}