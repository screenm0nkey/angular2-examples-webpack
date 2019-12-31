import {Component} from '@angular/core';

@Component({
  template: `
      <div class='comps'>
          <section class='info' collapse-it>
              <p class='file'>misc-examples/components/view-children/main.ts</p>
              <h4>Notes on ViewChild/Children</h4>
              <div class='links'>
                  <dlink id="1003"></dlink>
                  <dlink id="1004"></dlink>

              </div>
              Some examples...
              <code>@ViewChild('myref') el: ElementRef;</code>
              <code>@ViewChild('header') headerTemplate: TemplateRef<lgt>any</lgt></code>
              <code>@ViewChild('vc',<cur>read: ViewContainerRef</cur>) vc;</code>
              <code>@ViewChild(ChildViewComponent) viewChild: ChildViewComponent;</code>
              <code>@ViewChild(OnChangesComponent) childView: OnChangesComponent;</code>
              <code>@ViewChild(KeepCountComponent) private keepCount: KeepCountComponent;</code>
              <code>@ViewChild('foo', <cur>static: false</cur>) template: TemplateRef;</code>
              <code>@ViewChildren(TemplateRef) templates: QueryList<lgt>TemplateRef</lgt></code>
          </section>

            <collapse-it>
                <app-card-container></app-card-container>
            </collapse-it>

          <linquist-example-04></linquist-example-04>

          <view-children-01-example></view-children-01-example>
          
          <view-children-02-example></view-children-02-example>

          <countdown-parent-vc></countdown-parent-vc>

          <dynamic-component-example-01></dynamic-component-example-01>
          
        <collapse-it><dynamic-component-example-02></dynamic-component-example-02></collapse-it>

          <section collapse-it>
              <p class='file'>misc-examples/components/view-children/_main.component.ts</p>
              <h4>Replace curly braces in code</h4>
              <p><code>@ViewChild('text',
                  <cur>static: false</cur>
                  ) textElement: ElementRef;</code></p>
          </section>

          <collapse-it><solution-four></solution-four></collapse-it>


      </div>
  `
})
export class MainViewChildrenComponent {
}
