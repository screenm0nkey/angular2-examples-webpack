import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      ${require("./speedy.component.html")}
      <speed-up-app></speed-up-app>
      ${require("./speedy-with-zones.component.html")}
      <speed-up-app-with-zones></speed-up-app-with-zones>
      <p>
        Using Zones is a great way to escape Angular’s change detection, without detaching change detectors and making
        the application code too complex. In fact, it turns out that Zones APIs are super easy to use, especially
        NgZone’s
        APIs to run code outside or inside Angular. Based on the numbers, we can even say that the NgZone example is
        about
        as fast as the fastest solution above it.
      </p>
      <div>
  `
})
export class SpeedyMainComponent {
}
