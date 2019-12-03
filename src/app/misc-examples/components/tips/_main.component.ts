import { Component } from "@angular/core";
import { RubbishService } from "../dependency-injection/injectables.service";

@Component({
  selector: "tips-main-component",
  template: `
    <div class="comps">
      <collapse-it>
        <dos-and-donts></dos-and-donts>
      </collapse-it>
      <collapse-it>
        <use-ngif></use-ngif>
      </collapse-it>
    </div>
  `
})
export class TipsMainComponent {
  constructor(rubbishSerivce: RubbishService) {
    const str = `%cRubbishService is providedIn root, and there available globally`;
    console.log(str, "color:lime", rubbishSerivce.imAString);
  }
}
