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

@Injectable()
class WikipediaService {
    constructor(private jsonp: Jsonp) {}

    search (term: string) : Promise<any> {
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
    providers: [JSONP_PROVIDERS, WikipediaService],
    template: `
    <div>
      <h4>Wikipedia Search using Jsonp which extends Http
      <br><a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html">
        taking-advantage-of-observables-in-angular2
      </a>
      </h4>
      <input #term type="text" (keyup)="search(term.value)">
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
    providers: [JSONP_PROVIDERS, WikipediaService],
    template: `
    <div>
      <h4>Same as above but using promises (toPromise), observables and async pipe</h4>
      <input type="text" [ngFormControl]="term"/> <span *ngIf="loading">loading</span>
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
            .switchMap((term) => this.wikipediaService.search(term))
            .do(()=>this.loading = false);
    }
}

