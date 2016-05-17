import {Component} from '@angular/core';
import {BaseRequestOptions} from '@angular/http';
import {CounterComponent} from './rx-counter';
import {WikipediaSuperSearch} from './wikipedia-search-2';
import {JsonpWikipediaPromise, WikipediaObservable} from './wikipedia-search-1';
import {EchonestSearch} from './echonest-search';
import {Auth0Component} from './auth0-authentication';

import {YoutubeBasicExample} from './youtube-basic';
import {LocalRefSearch} from './local-ref-search';
import {RedditExample} from './reddit';
import {SubscribeExample} from './subscribe';
import {PromiseExample} from './promise';
import {YoutubeExample} from './youtube-ng2-book';


// these query strings will be added everywhere. note I've removed
// provide(RequestOptions, {useClass: MyOptions}) as it's stopping some examples working
class MyOptions extends BaseRequestOptions {
    url:string = 'format=json'; // this is added to all http requests as a query string
    body:string = JSON.stringify({name: "Ryan"}); // this doesn't seem to work
}

@Component({
    selector: 'app-component',
    template: `
        <echonest-app></echonest-app>
        <counter-component></counter-component>
        <wikipedia-super-search></wikipedia-super-search>
        <wikipedia-promise></wikipedia-promise>
        <wikipedia-observable></wikipedia-observable>
        <echonest-search></echonest-search>
        <auth0-example></auth0-example>
        <ngbook-youtube-example></ngbook-youtube-example>
        <youtube-basic-example></youtube-basic-example>
        <local-ref-search></local-ref-search>
        <reddit-example></reddit-example>
        <subscribe-example></subscribe-example>
        <promise-example></promise-example>  
    `,
    directives: [
        CounterComponent,
        WikipediaSuperSearch,
        JsonpWikipediaPromise,
        WikipediaObservable,
        EchonestSearch,
        Auth0Component,
        YoutubeBasicExample,
        LocalRefSearch,
        RedditExample,
        SubscribeExample,
        PromiseExample,
        YoutubeExample
    ]
})
export class HttpExamples {
    constructor() {
        console.log(this);
    }
}


