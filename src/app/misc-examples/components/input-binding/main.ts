import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <div class="links">
        <a routerLink="/misc/view-children">@viewChild, @viewChildren</a>
        <a href="http://mean.expert/2016/05/21/angular-2-component-communication/" target="_blank">How components
          Communicate (READ THIS IT'S VERY GOOD)</a>
      </div>
      <toggle-component></toggle-component>
      <name-parent></name-parent>
      <version-parent></version-parent>
      <countdown-parent-lv></countdown-parent-lv>
      <inventory-app></inventory-app>
    </div>
  `
})
export class MainInputBindingApp {
}
