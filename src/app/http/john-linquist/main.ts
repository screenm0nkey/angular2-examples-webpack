import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div class="comps">
      <collapse-it>
        <john-linquist-wiki></john-linquist-wiki>
      </collapse-it>

      <collapse-it>
        <forkjoin-app></forkjoin-app>
      </collapse-it>

      <collapse-it>
        <star-wars></star-wars>
      </collapse-it>
    </div>
  `
})
export class JohnLinquistExamples {}
