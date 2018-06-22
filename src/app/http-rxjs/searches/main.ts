import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
        <wikipedia-super-search></wikipedia-super-search>
        <wikipedia-promise></wikipedia-promise>
        <wikipedia-observable></wikipedia-observable>
        <hr>
        <echonest-search></echonest-search>
        <hr>
        <auth0-example></auth0-example>
        <hr>
        <ngbook-youtube-example></ngbook-youtube-example>
        <hr>
        <youtube-basic-example></youtube-basic-example>
        <hr>
        <local-ref-search></local-ref-search>
        <hr>
        <reddit-example></reddit-example>
    `
})
export class HttpExamples {
  constructor() {
    console.log(this);
  }
}
