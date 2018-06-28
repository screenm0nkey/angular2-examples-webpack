import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import {WikiSearchService} from "./wikipedia-search.service";


// same as wikipedia-searchForImages-1.ts but built with observables
@Component({
  selector: "wikipedia-observable",
  // providers: [WikipediaService],
  template: `
    <div>
    <p class="path">app/http-rxjs/searches/wikipedia-search-2.ts</p>
      <h4>Search using angular <strong>async filter</strong>, <strong>input.valueChanges</strong> and a loading icon</h4>
      
      <input type="text" [formControl]="term" placeholder="Wikipedia Search"/> 
      <span *ngIf="loading" style="background-color: red">loading</span>
      <ul><li *ngFor="let item of items | async">{{item}}</li></ul>
    </div>
  `
})
export class WikipediaObservable {
  items: Observable<Array<string>>;
  term = new FormControl();
  loading: boolean = false;

  constructor(private wikiSearch: WikiSearchService) {
    this.items = this.term.valueChanges
      .do(() => (this.loading = true))
      .debounceTime(400)
      .distinctUntilChanged()
      // you should always use switchMap when making http requests
      .switchMap((sterm: string) => this.wikiSearch.search(sterm))
      .delay(1000) // add a delay to see the loading icon
      .do(() => (this.loading = false));
  }
}
