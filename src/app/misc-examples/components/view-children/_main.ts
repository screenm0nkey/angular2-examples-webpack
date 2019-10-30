import {Component} from '@angular/core';

@Component({
  template: `
      <div class='comps'>
          <div class='info'>
              <p class='file'>misc-examples/components/view-children/main.ts</p>
              <div class='links'>
                  <dlink id="1003"></dlink>
                  <dlink id="1004"></dlink>
                  
              </div>
              Some examples...
              <code>
@ViewChild('myref') el: ElementRef;
@ViewChild('header') headerTemplate: TemplateRef&lt;any&gt;
@ViewChild('vc', <brace>read: ViewContainerRef</brace>) vc;
@ViewChild(ChildViewComponent) viewChild: ChildViewComponent;
@ViewChild(OnChangesComponent) childView: OnChangesComponent;
@ViewChild(KeepCountComponent) private keepCount: KeepCountComponent;</code>
          </div>

          <example-04></example-04>

          <add-to-list-component></add-to-list-component>
          
          <countdown-parent-vc></countdown-parent-vc>

          <section>
              <p class='file'>src/app/shared/code.component.ts</p>
              <h4>Replace curly braces in code</h4>
              <p><code>@ViewChild('text', <brace>static: false</brace>) textElement: ElementRef;</code></p>
          </section>

          
      </div>
  `
})
export class MainChildrenApp {
}
