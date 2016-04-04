import {Component} from 'angular2/core'
import { ChangeComponent } from './change';
import { MarkForCheck } from './mark-for-check';

@Component({
    selector: 'change-detection-main',
    template: `
        <change-component></change-component>
        <hr>
        
        <mark-for-check></mark-for-check>
    `,
    directives: [ChangeComponent, MarkForCheck]
})
export class ChangeDetectionMain {}