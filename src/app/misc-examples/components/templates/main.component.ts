import { Component } from "@angular/core";

@Component({
  selector: "template-component",
  template: `
    <div class="comps">
      <if-template></if-template>
      <for-template></for-template>
    </div>
  `
})
export class TemplateComponent {}
