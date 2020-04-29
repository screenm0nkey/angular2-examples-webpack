import { Component } from '@angular/core';

@Component({
    template: `
      <div class='comps'>
          <collapse-it>
              <p class="path">misc-examples/components/content-children/main.ts</p>
              <h4>Notes on Content Projection</h4>

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
          </collapse-it>

          <collapse-it>
            <h4>Should you use template reference or ng-content?</h4>
            <dlink id="91"></dlink>
            <p>There is a subtle difference between using templateRef vs. using ng-content because of how Angular’s lifecycle management works. Angular’s OnInit and onDestroy hooks works for component where they are declared, not where they are used/rendered. That means, if using ng-content, the child will not be destroyed when destroying the component containing the ng-content. Also for a child component being instantiated with ng-content, the constructor and init hooks will also be invoked regardless of if the child component has been rendered in the DOM. </p>
            <p class="highlight">For that reason, passing the template projection as templateRef is the most maintainable and performant, as the lifecycle hooks are only getting called if the templateRef have actually been rendered in the DOM and because it gets destroyed with the component instantiating the templateRef.</p>
          </collapse-it>
        
          <linquist-example-04></linquist-example-04>
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
