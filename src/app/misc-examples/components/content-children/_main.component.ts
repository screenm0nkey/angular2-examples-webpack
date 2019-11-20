import {Component} from '@angular/core';

@Component({
  template: `
      <div class='comps'>
          <section collapse-it>
              <p class="path">src/app/misc-examples/components/content-children/main.ts</p>
              <h4>Notes on Content Projection and @ContentChildren</h4>

              <p>
                  <code>@ContentChildren</code> allows us to target 'local-refs' in content which has been inserted
                  using
                  ng-content. If the content was just in the view then we could use <code>@ViewChildren</code>
              </p>

              <p>
                  QueryList is a class provided by Angular and when we use QueryList with a @ContentChildren annotation
                  Angular populates this with the components that match the query and then keeps the items
                  up to date if the state of the application changes.
              </p>

              <p>Transclusion in the AngularJS is now called Content Projection in Angular and uses <code>
                  <lgt>ng-content</lgt>
              </code></p>
              
              <p>You can also have multiple content projection by naming the content <code>
                  <lgt>ng-content select='[body]'</lgt>
              </code></p>
              
              <p>You would taget it like this <code>
                  <lgt>emitter-component body</lgt>
              </code></p>
          </section>

          <problem-one></problem-one>
          <problem-one-fix></problem-one-fix>
          <content-children-tabs></content-children-tabs>
          <content-children-descendants></content-children-descendants>
          <multi-content-config></multi-content-config>
          <content-projection-example></content-projection-example>
          <accordion-example></accordion-example>
      </div>
  `
})
export class MainContentProjectionComponent {
}
