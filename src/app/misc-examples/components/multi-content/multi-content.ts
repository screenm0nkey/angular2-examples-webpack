import {Component} from '@angular/core';

/**
 * Component
 */
@Component({
  selector: 'multi-content',
  styles: [`
      .box {
          min-height: 30px;
          border: 5px solid purple;
          display: block;
          margin-bottom: 10px;
      }
  `],
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/multi-content/multi-content.ts</p>
          <h4>Inserting content into multiple places in a template <code><lgt>ng-content select='[header]'</lgt><lgt>/ng-content</lgt></code></h4>
          <p>Multi content projection into named template</p>
          <div class='box'>
              <code><lgt>ng-content select='[header]'</lgt><lgt>/ng-content</lgt></code>
              <ng-content select='[header]'></ng-content>
          </div>

          <div class='box'>
              <code><lgt>ng-content select='[body]'</lgt><lgt>/ng-content</lgt></code>
              <p>Content here is generated by a separate emitter-component.</p>
              <ng-content select='[body]'></ng-content>
          </div>
      </collapse-it>
  `
})
export class MultiContentComponent {
}


/**
 * Component
 */
@Component({
  selector: 'multi-content-config',
  template: `
      <multi-content>
          <div header>
              This content is projected into the 'header'.
              The body content below is a separate component.
          </div>
          <emitter-component body></emitter-component>
      </multi-content>
  `
})
export class MultiContentConfigComponent {
}