import {Component} from "@angular/core";

@Component({
  template: `
  <div class="comps">
    <div class="links">
      <a routerLink="/misc/input-binding">Access a child component from the parent using local variable</a>
    </div>
    <my-component2></my-component2>
    <countdown-parent-vc></countdown-parent-vc>
  </div>
  `
})
export class MainChildrenApp {
}



