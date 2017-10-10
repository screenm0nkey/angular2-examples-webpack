import {Component, Injectable} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Injectable()
class WikipediaService {
  constructor(private jsonp: Jsonp) {
  }

  search(term: string): Promise<string[]> {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .toPromise()
      .then((request) => request.json()[1]);
  }
}


@Component({
  selector: 'wikipedia-promise',
  providers: [WikipediaService],
  template: `
    <div>
    <p class="path">/http-rxjs/searches/wikipedia-search-1.ts</p>
      <h4>Examples using promises, observables and async pipe and a loader</h4>
      <p>
      <a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html" target="_blank">
        taking-advantage-of-observables-in-angular2
      </a>
      <a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html" target="_blank">Thoughtram article</a>

      </p>
      Search 
      <input #term type="text" 
        (keyup)="search(term.value)" 
        placeholder="Wikipedia Search">
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
    </div>
  `
})
export class JsonpWikipediaPromise {
  items: Array<string>;

  constructor(private wikipediaService: WikipediaService) {
  }

  search(term: string) {
    this.wikipediaService.search(term).then(items => this.items = items);
  }
}


// same as above but built with observables
@Component({
  selector: 'wikipedia-observable',
  providers: [WikipediaService],
  template: `
    <div>
      <h5></h5>
      Search using async filter<input type="text" [formControl]="term" placeholder="Wikipedia Search"/> 
      <span *ngIf="loading" style="background-color: red">loading</span>
      <ul><li *ngFor="let item of items | async">{{item}}</li></ul>
    </div>
  `
})
export class WikipediaObservable {
  items: Observable<Array<string>>;
  term = new FormControl();
  loading: boolean = false;

  constructor(private wikipediaService: WikipediaService) {
    this.items = this.term.valueChanges
      .do(() => this.loading = true)
      .debounceTime(400)
      .distinctUntilChanged()
      // you should always use switchMap when making http requests
      .switchMap((sterm: string) => this.wikipediaService.search(sterm))
      .delay(1000) // add a delay to see the loading icon
      .do(() => this.loading = false);
  }
}

