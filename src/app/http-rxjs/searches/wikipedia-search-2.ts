import {Component, Injectable} from '@angular/core';
import {Control} from '@angular/common';
import {JSONP_PROVIDERS, URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
class WikipediaService {
    constructor(private jsonp: Jsonp) {}

    search(terms: Observable<string>, debounceDuration = 400) {
        return terms
            .debounceTime(debounceDuration)
            .distinctUntilChanged()
            .switchMap((term:string) => this.rawSearch(term));
    }

    rawSearch (term: string) {
        var search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
            .map((request) => request.json()[1]);
    }
}


@Component({
    selector: 'wikipedia-super-search',
    providers: [JSONP_PROVIDERS, WikipediaService],
    template: `
    <div>
      <h4>Wikipedia Super Search</h4>
      Search <input type="text" [ngFormControl]="term" placeholder="Wikipedia Search"/>
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>
  `
})
export class WikipediaSuperSearch {
    items: Observable<Array<string>>;
    term = new Control();
    constructor(private wikipediaService: WikipediaService) {
        this.items = wikipediaService.search(this.term.valueChanges, 350);
    }
}
