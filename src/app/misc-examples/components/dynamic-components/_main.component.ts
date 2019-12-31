import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
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

      <collapse-it><linquist-example-08></linquist-example-08></collapse-it>
    </div>
  `
})
export class DynamicMainComponent {}
