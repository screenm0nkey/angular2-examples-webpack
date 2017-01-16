import {Component} from '@angular/core'

@Component({
  selector: 'change-detection-main',
  template: `
        <change-component></change-component>
        <hr>
        <mark-for-check></mark-for-check>
        <hr>
        <parent-obs></parent-obs>
        <hr>
        <change-detection-sample-app></change-detection-sample-app>
        <hr>
        <observable-change-detection-sample-app></observable-change-detection-sample-app>
    `,
})
export class ChangeDetectionMain {
}
