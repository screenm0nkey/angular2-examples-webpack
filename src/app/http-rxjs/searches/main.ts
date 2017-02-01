import {Component} from "@angular/core";
import {BaseRequestOptions} from "@angular/http";


// these query strings will be added everywhere. note I've removed
// provide(RequestOptions, {useClass: MyOptions}) as it's stopping some examples working
class MyOptions extends BaseRequestOptions {
  url: string = 'format=json'; // this is added to all http requests as a query string
  body: string = JSON.stringify({name: "Ryan"}); // this doesn't seem to work
}

@Component({
  selector: 'app-component',
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
    `,
})
export class HttpExamples {
  constructor() {
    console.log(this);
  }
}


