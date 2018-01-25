import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <section>
        ${require("./speedy.component.html")}
        <!--<speed-up-app></speed-up-app>-->
      </section>
      <section>
        ${require("./speedy-with-zones.component.html")}
        <speed-up-app-with-zones></speed-up-app-with-zones>
      </section>


      <div>
  `
})
export class SpeedyMainComponent {
}
