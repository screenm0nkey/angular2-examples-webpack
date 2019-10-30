import {Component} from '@angular/core';

/**
 * Component
 */
@Component({
  template: `
      <div class='comps'>
          
          <section>
              <path>src/app/misc-examples/components/multi-content/_main.ts</path>
              <h4>Notes on Content Projection</h4>
              <p>Transclusion in the AngularJS is now called Content Projection in Angular and uses <code><htm>ng-content</htm></code></p>
              <p>You can also have multiple content projection by naming the content <code><htm>ng-content select='[body]'</htm></code></p>
              <p>You would taget it like this <code><htm>emitter-component body</htm></code></p>
          </section>

          <multi-content-config></multi-content-config>
          <transclusion-simple></transclusion-simple>
          <content-children-tabs-1></content-children-tabs-1>
          <content-children-tabs-2></content-children-tabs-2>
          <accordian-component></accordian-component>
      </div>
  `
})
export class MultiTransclusion {
}
