import {Component} from 'angular2/core';
import {JSONP_PROVIDERS, URLSearchParams, Jsonp} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {ClientResponse} from "http";

@Injectable()
class WikipediaService {
    constructor(private jsonp: Jsonp) {}

    search (term: string) : Promise<string[]> {
        var search = new URLSearchParams()
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
            .toPromise()
            .then((request) => request.json()[1]);
    }
}


@Component({
    selector: 'wikipedia-promise',
    styles : [require('./main.css')],
    providers: [JSONP_PROVIDERS, WikipediaService],
    template: `
    <div>
      <h4>Wikipedia Search using Jsonp which extends Http</h4>
      <p><a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html">
        taking-advantage-of-observables-in-angular2
      </a></p>
      Search <input #term type="text" (keyup)="search(term.value)" placeholder="Wikipedia Search">
      <ul><li *ngFor="#item of items">{{item}}</li></ul>
    </div>
  `
})
export class JsonpWikipediaPromise {
    items: Array<string>;
    constructor(private wikipediaService: WikipediaService) {}
    search (term :string) {
        this.wikipediaService.search(term).then(items => this.items = items);
    }
}




// same as above but built with observables
@Component({
    selector: 'wikipedia-observable',
    styles : [require('./main.css')],
    providers: [JSONP_PROVIDERS, WikipediaService],
    template: `
    <div>
      <h4>Same as above but using promises (toPromise), observables and async pipe</h4>
      <a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html" target="_blank">Thoughtram article</a>
      Search <input type="text" [ngFormControl]="term" placeholder="Wikipedia Search"/> <span *ngIf="loading">loading</span>
      <ul><li *ngFor="#item of items | async">{{item}}</li></ul>
    </div>
    <hr>
  `
})
export class WikipediaObservable {
    items: Observable<Array<string>>;
    term = new Control();
    loading : boolean = false;

    constructor(private wikipediaService: WikipediaService) {
        this.items = this.term.valueChanges
            .do(()=>this.loading = true)
            .debounceTime(400)
            .distinctUntilChanged()
            // you could also use flatMap() instead of switchMap()
            .switchMap((sterm:string)=>{
                // Note: You don't have to convert the promise to a stream using fromPromise()
                // you can just return the promise but I couldn't stop the TS error
                // when returning a promise directly into switchMap()
                return Observable.fromPromise(this.wikipediaService.search(sterm))
            })
            .do(()=>this.loading = false);
    }
}

