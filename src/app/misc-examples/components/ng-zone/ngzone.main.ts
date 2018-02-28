import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      ${require("./how-to-speed-up.html")}
      <ng-zone-demo></ng-zone-demo>
      <section>
        ${require("./speedy.component.html")}
        <speedy-component></speedy-component>
      </section>
      <section>
        ${require("./speedy-with-zones.component.html")}
        <speed-up-app-with-zones></speed-up-app-with-zones>
      </section>
    </div>
  `
})
export class NgZoneMainComponent {
}
