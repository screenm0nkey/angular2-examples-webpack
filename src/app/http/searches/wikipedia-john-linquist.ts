import { Component, OnInit } from "@angular/core";
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
  takeUntil,
  tap
} from "rxjs/operators";
import { merge, Observable, Subject } from "rxjs";
import { WikiSearchService, WikiImage, WikiImageSearchResponse } from "./wikipedia-search.service";

@Component({
  selector: "john-linquist-wiki",
  providers: [WikiSearchService],
  template: `
    <div>
      <p class="path">/http-rxjs/john-linquist/wikipedia-john-linquist.ts</p>
      <h4>Wiki Image Search by merging two streams</h4>
      <dlink [id]="38"></dlink>

      <p>The proxy for the searches is configured in <strong>proxy.config.json</strong> and <strong>package.json</strong></p>

      <input type="text" (input)="input$.next($event)" />
      <span style="color: red">{{ searchTerm$ | async }}</span>

      <h3>{{ imageCount$ | async }} results</h3>
      <div class="ngx-container">
        <a
          *ngFor="let image of images$ | async"
          [href]="image.descriptionurl"
          [title]="image.title"
        >
          <img [src]="image.url" style="width: 100px;" />
        </a>
      </div>
    </div>
  `
})
export class JohnLinquistWikiSearch implements OnInit {
  protected input$: Observable<string>;
  protected searchTerm$: Observable<string>;
  protected images$: Observable<WikiImage[]>;
  protected imageCount$: Observable<number>;

  constructor(private wikipediaService: WikiSearchService) { }

  ngOnInit(): void {
    this.input$ = new Subject().pipe(map((event: Event) => (<HTMLInputElement>event.target).value));

    // hot observable
    const term$ = this.input$
      .pipe(tap((term: string) => console.log(1.1, term)))
      .pipe(distinctUntilChanged()) // only output distinct values, based on the last emitted value
      .pipe(debounceTime(250)) // time in ms to wait before allowing the emitted value to continue 
      .pipe(filter(term => term.length > 2))
      .pipe(tap((term: string) => console.log(1.2, term)))
      .pipe(share());

    // hot observable
    const lessThanTwoChars$ = this.input$
      .pipe(filter(term => term.length <= 2))
      .pipe(map(term => (!term.length ? "" : "Enter a term longer than 2 letters")))
      .pipe(tap((term: string) => console.log(2.1, term)))
      .pipe(share());

    this.searchTerm$ = merge(term$, lessThanTwoChars$);

    // hot observable
    const results$ = term$
      .pipe(tap((term: string) => console.log(3.1, term)))
      .pipe(switchMap(this.wikipediaImageSearch.bind(this)))
      .pipe(startWith([]))
      .pipe(tap(term => console.log(3.2, term)))
      .pipe(share());

    this.images$ = merge(results$, lessThanTwoChars$.pipe(map(term => [])));
    this.imageCount$ = this.images$.pipe(map((results: WikiImage[]) => results.length));
  }

  wikipediaImageSearch(term: string): Observable<WikiImage[]> {
    return this.wikipediaService
      .searchForImages(term) // 3
      .pipe(map((res: any) => this.wikipediaService.getImageTitles(res))) // 4
      .pipe(tap(term => console.log(5.1, term)))
      .pipe(concatAll())
      .pipe(tap(term => console.log(5.2, term)))
      .pipe(mergeMap((imageName: string) => this.wikipediaService.getImageInfoFromTitle(imageName))) // 5
      // The current observable will emit values until the provided observable emits a value, at which point it stops
      .pipe(takeUntil(this.input$))
      .pipe(map(this.wikipediaService.mapImageInfoToUrls)) // 6
      .pipe(tap(term => console.log(5.3, term)))
      .pipe(scan((acc, curr) => [...acc, ...curr]));
  }
}
