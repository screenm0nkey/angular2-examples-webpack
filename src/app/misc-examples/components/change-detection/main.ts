import {Component} from '@angular/core'

@Component({
  selector: 'change-detection-main',
  template: `
        <change-component></change-component>
        <hr>
        <mark-for-check></mark-for-check>
        <hr>
        <parent-obs></parent-obs>
    `,
})
export class ChangeDetectionMain {
}
