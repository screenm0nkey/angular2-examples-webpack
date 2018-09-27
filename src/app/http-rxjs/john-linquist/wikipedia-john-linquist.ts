import {Component} from '@angular/core';
import {
  concatAll,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  scan,
  share,
  startWith,
  switchMap,
  takeUntil
} from 'rxjs/operators'
import {merge, Observable, Subject} from 'rxjs';
import {WikiSearchService} from '../searches/wikipedia-search.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'john-linquist-wiki',
  providers: [WikiSearchService],
  templateUrl: './wikipedia-john-linquist.html',
})
export class JohnLinquistWikiSearch implements OnInit {
  input$ = new Subject().pipe(map((event: Event) => (<HTMLInputElement>event.target).value));
  searchTerm$;
  images$;
  imageCount$;

  constructor(private wikipediaService: WikiSearchService) {}

  ngOnInit() : void {
    // hot observable
    const term$ = this.input$
      .pipe(distinctUntilChanged())
      .pipe(debounceTime(250))
      .pipe(filter(term => term.length > 2))
      .pipe(share());

    // hot observable
    const lessThanTwoChars$ = this.input$
      .pipe(filter(term => term.length <= 2))
      .pipe(map(term => !term.length ? '' : 'Enter a term longer than 2 letters'))
      .pipe(share())

    this.searchTerm$ = merge(term$, lessThanTwoChars$);

    const results$ = term$
      .pipe(switchMap(this.wikipediaImageSearch.bind(this)))
      .pipe(startWith([]))
      .pipe(share());

    this.images$ = merge(results$, lessThanTwoChars$.pipe(map(term => [])));
    this.imageCount$ = this.images$.pipe(map( (results : any[]) => results.length));
  }

  wikipediaImageSearch(term): Observable<any[]> {
    return this.wikipediaService
      .searchForImages(term) // 3
      .pipe(map(this.wikipediaService.getImageTitles)) // 4
      .pipe(concatAll())
      .pipe(mergeMap(this.wikipediaService.getImageInfoFromTitle)) // 5
      .pipe(takeUntil(this.input$))
      .pipe(map(this.wikipediaService.mapImageInfoToUrls)) // 6
      .pipe(scan((acc, curr) => [...acc, ...curr]));
  }
}
