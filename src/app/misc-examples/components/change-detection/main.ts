import {Component} from '@angular/core'
import {ChangeComponent} from './change.components';
import {MarkForCheck} from './mark-for-check.component';

@Component({
  selector: 'change-detection-main',
  template: `
        <change-component></change-component>
        <hr>
        <mark-for-check></mark-for-check>
    `,
})
export class ChangeDetectionMain {
}
