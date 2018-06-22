import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Injectable()
class WikipediaService {
  constructor(private http: HttpClient) {}

  search(terms$: Observable<string>, debounceDuration = 400) {
    return terms$
      .debounceTime(debounceDuration)
      .distinctUntilChanged()
      .switchMap((term: string) => this.rawSearch(term));
  }

  rawSearch(term: string) {
    const headers = new HttpHeaders();
    headers.append("action", "opensearch");
    headers.append("search", term);
    headers.append("format", "json");
    return this.http
      .get("http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK", {headers})
      .map(request => request[1]);
  }
}

@Component({
  selector: "wikipedia-super-search",
  providers: [WikipediaService],
  template: `
    <div>
      <hr>
      <p class="path">/http-rxjs/searches/wikipedia-search-2.ts</p>
      <h4>Using the formControl.valueChanges Observable and JSONP</h4>
      Search <input type="text" [formControl]="term" placeholder="Wikipedia Search"/>
      <ul>
        <li *ngFor="let item of items$ | async">{{item}}</li>
      </ul>
      <hr>
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
