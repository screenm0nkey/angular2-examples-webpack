import {Component} from '@angular/core'
import { HostOne } from './host-one';
import { HostOnePartTwo } from './host-one-part-2';
import { HostTwo } from './host-two';
import { HostThree } from './host-three';

@Component({
    selector: 'host-stuff-component',
    styles : [`h4 {font-weight: bold;color:darkred}`],
    template: `
        <pre><h2>@HostListener @HostBinding</h2></pre>
        <hr>
        
        <h4>1.1) host-one-component @HostBinding</h4>
        <host-one-component></host-one-component>
        <hr>
        
        <h4>1.2) host-one-part-two using host:{}</h4>
        <host-one-part-two-component></host-one-part-two-component>
        <hr>
        
        <h4>2) host-two-component @HostListener</h4>
        <host-two-component></host-two-component>
        <hr>
        
        <h4>3) host-three-component</h4>
        <host-three-component></host-three-component>

    `,
    directives: [HostOne, HostOnePartTwo, HostTwo, HostThree]
})
export class HostStuffComponent {}