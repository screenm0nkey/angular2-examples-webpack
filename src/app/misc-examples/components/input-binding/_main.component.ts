import { Component } from "@angular/core";

@Component({
  styleUrls: ["./inputs.css"],
  template: `
    <div class="comps">
      <section collapse-it>
        <p class="path">src/app/misc-examples/components/input-binding/_main.component.ts</p>
        <h4>Links for Component Communication</h4>
        <div class="links">
          <a routerLink="/misc/view-children">@viewChild, @viewChildren</a>
          <dlink [id]="21"></dlink>
        </div>
      </section>

      <collapse-it><toggle-component></toggle-component></collapse-it>
      <collapse-it><name-parent></name-parent></collapse-it>
      <collapse-it><version-parent></version-parent></collapse-it>
      <collapse-it><countdown-parent-lv></countdown-parent-lv></collapse-it>
      <collapse-it><inventory-app></inventory-app></collapse-it>
    </div>
  `
})
export class MainInputBindingApp {}
