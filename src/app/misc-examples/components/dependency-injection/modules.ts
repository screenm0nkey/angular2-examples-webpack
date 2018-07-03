import {Component} from "@angular/core";

@Component({
  selector: "modules-component",
  template: `
    <div class="comps">
      ${require("./modules.html")}
    </div>

  `
})
export class ModulesComponent {
}
