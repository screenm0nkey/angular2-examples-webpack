import { Component } from "@angular/core";

@Component({
  selector: "misc-http-component",
  template: `
      <ngrx-stater-app></ngrx-stater-app>
      <hr>
      <auto-wiki-search></auto-wiki-search>
      <hr>
      <counter-component></counter-component>
      <hr>
      <promise-example></promise-example>  
      <hr>
      <subscribe-example></subscribe-example>
    `
})
export class MiscHttpExamples {}
