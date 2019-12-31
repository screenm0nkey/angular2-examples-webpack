import { Component } from "@angular/core";
import { RubbishService } from "../dependency-injection/injectables.service";

@Component({
  selector: "tracks-main-component",
  template: `
    <div class="comps">
      <collapse-it>
        <scroll-bottom></scroll-bottom>
      </collapse-it>
      <collapse-it>
        <next-input></next-input>
      </collapse-it>
      <collapse-it>
        <typewriter></typewriter>
      </collapse-it>
    </div>
  `
})
export class TricksMainComponent {
  constructor() {}
}
