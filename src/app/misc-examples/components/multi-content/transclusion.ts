import {Component} from '@angular/core';

@Component({
  selector: '[message]',
  inputs: ['header'],
  host: {
    class: 'ui message' // add class to host element
  },
  template: `
      <div>
          <div class='header'>{{ header }}</div>
          <p style='border: solid pink'>
              <ng-content></ng-content>
          </p>
      </div>
  `
})
export class Message {
  header: string;
}

/**
 * Component
 */
@Component({
  selector: 'content-projection-example',
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/multi-content/transclusion.ts</p>
          <h4>Using @Input and Content Projection on the same element</h4>

          <div message header='This message was inserted using @Input'>
              This content was inserted using content projection.
          </div>
      </collapse-it>
  `
})
export class ContentProjectionExample {
}
