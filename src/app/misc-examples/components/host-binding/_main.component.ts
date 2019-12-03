import { Component } from "@angular/core";

@Component({
  styles: [
    `
      h4 {
        font-weight: bold;
        color: darkred;
      }
    `
  ],
  template: `
    <div class="comps">
      <collapse-it>
        <host-one-component></host-one-component>
      </collapse-it>

      <collapse-it>
        <host-one-part-two-component></host-one-part-two-component>
      </collapse-it>
      
      <collapse-it>
        <host-two-component></host-two-component>
      </collapse-it>
      
      <collapse-it>
        <host-three-component></host-three-component>
      </collapse-it>
    </div>
  `
})
export class HostBindingComponent {}
