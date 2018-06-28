import {Component} from "@angular/core";
import {map,scan,concatAll, mergeMap, mapTo} from 'rxjs/operators'
import "rxjs/add/operator/do";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/share";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/race";
import "rxjs/add/observable/bindCallback";
import "rxjs/add/observable/merge";
import {Subject} from "rxjs/Subject";
import {WikiSearchService} from "../searches/wikipedia-search.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: "john-linquist-wiki",
  providers: [WikiSearchService],
  template: require("./wikipedia-john-linquist.html"),
})
export class JohnLinquistWikiSearch {
  input$ = new Subject().map((event: Event) => (<HTMLInputElement>event.target).value);
  searchTerm$;
  images$;
  imageCount$;

  constructor(private wikipediaService: WikiSearchService) {
    // hot observable
    const term$ = this.input$
      .distinctUntilChanged()
      .debounceTime(250)
      .filter(term => term.length > 2)
      .share();

    // hot observable
    const lessThanTwoChars$ = this.input$
      .filter(term => term.length <= 2)
      .map(term => !term.length ? "" : "Enter a term longer than 2 letters")
      .share();

    this.searchTerm$ = Observable.merge(term$, lessThanTwoChars$);

    const results$ = term$
      .switchMap(this.wikipediaImageSearch.bind(this))
      .startWith([])
      .share();

    this.images$ = Observable.merge(
      results$,
      lessThanTwoChars$.map(term => [])
    );

    this.imageCount$ = this.images$.map(results => results.length);
  }

  wikipediaImageSearch(term): Observable<any[]> {
    return this.wikipediaService
      .searchForImages(term) //3
      .map(this.wikipediaService.getImageTitles) //4
      .concatAll()
      .mergeMap(this.wikipediaService.getImageInfoFromTitle) //5
      .takeUntil(this.input$)
      .map(this.wikipediaService.mapImageInfoToUrls) //6
      .scan((acc, curr) => [...acc, ...curr]);
  }
}
