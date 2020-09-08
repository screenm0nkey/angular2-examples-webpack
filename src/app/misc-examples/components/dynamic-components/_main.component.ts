import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
    
      <collapse-it>
      <p class="path">app/misc-examples/components/dynamic-components/_main.component.ts</p>
        <h4>DOM Manipulation Notes</h4>
        <ul>
          <li><dlink id="99"></dlink></li>
          <li><strong>Modify DOM elements</strong> — Use Renderer service.</li>
          <li><strong>Modify DOM Structure</strong> — Use ViewContainerRef and TemplateRef classes</li>
          <li>
            Always Remember to add dynamic components to the <code>entryComponents : []</code> array in the module.  
            Normally, Angular generates a factory for each component that it finds referenced in a template. 
            In this case, the dynamic components are not referenced anywhere, as they are used only at runtime. 
            We have to tell Angular to generate the factories, and to do so, we need to add our components 
            to the <code>entryComponents</code> array in the NgModule.
          </li>
        </ul>

      </collapse-it> 
      
      <collapse-it>
        <dynamic-component-example-01></dynamic-component-example-01>
      </collapse-it>
      
      <collapse-it>
        <dynamic-component-example-02></dynamic-component-example-02>
      </collapse-it>

      <collapse-it>
        <dynamic-component-example-03></dynamic-component-example-03>
      </collapse-it>

      <collapse-it>
        <dom-adapter-component></dom-adapter-component>
      </collapse-it>

      <collapse-it>
        <linquist-example-06></linquist-example-06>
      </collapse-it>

      <collapse-it>
        <linquist-example-08></linquist-example-08>
      </collapse-it>

      <collapse-it>
        <app-members-list></app-members-list>
      </collapse-it>
    </div>
  `
})
export class DynamicMainComponent { }
