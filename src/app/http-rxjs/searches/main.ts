import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <div class='comps'>
        <wikipedia-super-search></wikipedia-super-search>
        <wikipedia-promise></wikipedia-promise>
        <wikipedia-observable></wikipedia-observable>
        <echonest-search-component></echonest-search-component>
        <auth0-example></auth0-example>
        <ngbook-youtube-example></ngbook-youtube-example>
        <youtube-basic-example></youtube-basic-example>
        <local-ref-search></local-ref-search>
        <reddit-example></reddit-example>
      </div>
  `
})
export class HttpExamples {
}
