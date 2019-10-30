import {Component} from '@angular/core';

@Component({
  template: `
      <div class='comps'>
          <section>
              <p class="path">src/app/misc-examples/components/content-children/main.ts</p>
              <h4>@ContentChildren notes</h4>
              <p><code>@ContentChildren</code> allows us to target 'local-refs' in content which has been inserted using
                  ng-content.
                  If the content was just in the view then we could use <code>@ViewChildren</code></p>

              <p>
                  QueryList is a class provided by Angular and when we use QueryList with a @ContentChildren annotation
                  Angular populates this with the components that match the query and then keeps the items
                  up to date if the state of the application changes.
              </p>
          </section>

          <my-component></my-component>
          <fix-my-component></fix-my-component>
          <content-children-tabs-1></content-children-tabs-1>
          <content-children-tabs-2></content-children-tabs-2>
      </div>
  `
})
export class RookieComponent {
}
