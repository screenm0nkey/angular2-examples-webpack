import {Component, Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
class WikipediaService {
  constructor(private jsonp: Jsonp) {
  }

  search(terms$: Observable<string>, debounceDuration = 400) {
    return terms$
      .debounceTime(debounceDuration)
      .distinctUntilChanged()
      .switchMap((term: string) => this.rawSearch(term));
  }

  rawSearch(term: string) {
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map((request) => request.json()[1]);
  }
}


@Component({
  selector: 'wikipedia-super-search',
  providers: [WikipediaService],
  template: `
    <div>
      <h4>Using the formControl.valueChanges Observable</h4>
      Search <input type="text" [formControl]="term" placeholder="Wikipedia Search"/>
      <ul>
        <li *ngFor="let item of items$ | async">{{item}}</li>
      </ul>
    </div>
  `
})
export class WikipediaSuperSearch {
  items$: Observable<Array<string>>;
  term = new FormControl();
  valueChanges$: Observable<any> = this.term.valueChanges; //

  constructor(private wikipediaService: WikipediaService) {
    this.items$ = wikipediaService.search(this.valueChanges$, 350);
  }
}
