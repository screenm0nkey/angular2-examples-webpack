import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {WikiSearchService} from "./wikipedia-search.service";
import {tap, debounceTime, distinctUntilChanged, switchMap, delay} from 'rxjs/operators';


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
      .pipe(tap(() => (this.loading = true)))
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      // you should always use switchMap when making http requests
      .pipe(switchMap((sterm: string) => this.wikiSearch.search(sterm)))
      .pipe(delay(1000)) // add a delay to see the loading icon
      .pipe(tap(() => (this.loading = false)));
  }
}
