import {Component} from "@angular/core";

@Component({
  selector: "misc-http-component",
  template: `
    <div class="comps">
        <auto-wiki-search></auto-wiki-search>
        <counter-component></counter-component>
        <promise-example></promise-example>  
        <subscribe-example></subscribe-example>
      </div>
    `
})
export class MiscHttpExamples {
}
