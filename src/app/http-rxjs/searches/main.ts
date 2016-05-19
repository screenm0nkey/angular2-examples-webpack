import {Component} from '@angular/core';
import {BaseRequestOptions} from '@angular/http';
import {WikipediaSuperSearch} from './wikipedia-search-2';
import {JsonpWikipediaPromise, WikipediaObservable} from './wikipedia-search-1';
import {EchonestSearch} from './echonest-search';
import {Auth0Component} from './auth0-authentication';
import {YoutubeBasicExample} from './youtube-basic';
import {LocalRefSearch} from './local-ref-search';
import {RedditExample} from './reddit';
import {YoutubeExample} from './youtube-ng2-book';
import {JohnLinquistWikiSearch} from './wikipedia-john-linquist';
import {StarWarsComponent} from './star-wars';


// these query strings will be added everywhere. note I've removed
// provide(RequestOptions, {useClass: MyOptions}) as it's stopping some examples working
class MyOptions extends BaseRequestOptions {
    url:string = 'format=json'; // this is added to all http requests as a query string
    body:string = JSON.stringify({name: "Ryan"}); // this doesn't seem to work
}

@Component({
    selector: 'app-component',
    template: `
        <john-linquist-wiki></john-linquist-wiki>
        <hr>
        <star-wars></star-wars>
        <hr>
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
    directives: [
        JohnLinquistWikiSearch,
        StarWarsComponent,
        WikipediaSuperSearch,
        JsonpWikipediaPromise,
        WikipediaObservable,
        EchonestSearch,
        Auth0Component,
        YoutubeBasicExample,
        LocalRefSearch,
        RedditExample,
        YoutubeExample
    ]
})
export class HttpExamples {
    constructor() {
        console.log(this);
    }
}


