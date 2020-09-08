import { Component } from '@angular/core';
import { YoutubeService } from './youtube-helpers/youtube-service';
import { SearchResult } from './youtube-helpers/youtube-result-class';
import { Subject } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'local-ref-search',
  providers: [YoutubeService],
  template: `
        <div class='search-results'>
          <p class="path">/http-rxjs/searches/local-ref-search.ts</p>
           <h4>Local ref on input and observer.next(value) Youtube search example </h4>
            <input #inny (keyup)='source$.next(inny.value)' placeholder='Youtube Search'>
            <pre>There are {{results.length}} search results for {{searchTerm}}</pre>
            <youtube-result-component *ngFor='let result of results' [result]='result'></youtube-result-component>
        </div>
    `
})
export class LocalRefSearch {
  source$: Subject<any>;
  results: SearchResult[] = [];
  searchTerm: string = '';

  constructor(public youtube: YoutubeService) {
    this.source$ = new Subject();

    this.source$
      .pipe(debounceTime(500))
      .pipe(tap((text: string) => (this.searchTerm = text)))
      .pipe(filter(this.isLongerThanOneChar.bind(this)))
      .pipe(switchMap((text: string) => this.youtube.search(text))) // i think switchMap used to be flatMapLatest
      .subscribe((results: SearchResult[]) => (this.results = results));
  }

  isLongerThanOneChar(text: string) {
    if (text.length <= 1) this.results = [];
    return text.length > 1;
  }
}
