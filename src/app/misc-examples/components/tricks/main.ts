import {Component} from "@angular/core";

@Component({
  selector: "tracks-main-component",
  template: `
    <div class="comps">
      <scroll-bottom></scroll-bottom>
      <next-input></next-input>
      <typewriter></typewriter>
    </div>
  `
})
export class TricksMainComponent {
}
