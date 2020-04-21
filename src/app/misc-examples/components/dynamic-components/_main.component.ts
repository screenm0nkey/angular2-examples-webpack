import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
    
      <collapse-it>
        <p>Remember to add dynamic component to the <code>entryComponents : []</code> array in the module.  
        Normally, Angular generates a factory for each component that it finds referenced in a template. 
        In this case, the dynamic components are not referenced anywhere, as they are used only at runtime. 
        We have to tell Angular to generate the factories, and to do so, we need to add our components 
        to the <code>entryComponents</code> array in the NgModule.</p>
      </collapse-it> 
      
      <collapse-it>
        <dynamic-component-example-01></dynamic-component-example-01>
      </collapse-it>
      
      <collapse-it>
        <dynamic-component-example-02></dynamic-component-example-02>
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
export class DynamicMainComponent {}
