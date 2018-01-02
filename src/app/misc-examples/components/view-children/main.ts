import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <div class="links">
        <a routerLink="/misc/input-binding">Access a child component from the parent using local variable</a>
      </div>
      <add-to-list-component></add-to-list-component>
      <countdown-parent-vc></countdown-parent-vc>
    </div>
  `
})
export class MainChildrenApp {
}
