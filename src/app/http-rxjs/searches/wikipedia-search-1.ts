import {Component} from "@angular/core";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import {WikiSearchService} from "./wikipedia-search.service";

@Component({
  selector: "wikipedia-promise",
  template: `
    <div>
      <p class="path">app/http-rxjs/searches/wikipedia-search-1.ts</p>
      <h4>Examples using promises</h4>
      <p>
        <a href="http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html" target="_blank">taking-advantage-of-observables-in-angular2</a>
      </p>
      
      <input #term type="text" (keyup)="search(term.value)" placeholder="Wikipedia Search">
      
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
    </div>
  `
})
export class JsonpWikipediaPromise {
  items: Array<string>;

  constructor(private wikiSearch: WikiSearchService) {
  }

  search(term: string) {
    return this.wikiSearch.search(term)
      .toPromise()
      .then(request => this.items = request[1]);
  }
}
