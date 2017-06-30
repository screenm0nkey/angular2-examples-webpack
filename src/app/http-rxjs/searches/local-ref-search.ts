import {Component} from "@angular/core";
import * as Rx from "rxjs/Rx";
import {YoutubeService} from "./youtube-helpers/youtube-service";
import {SearchResult} from "./youtube-helpers/youtube-result-class";


@Component({
  selector: 'local-ref-search',
  providers: [YoutubeService],
  template: `
        <div class="search-results">
          <p class="path">src/app/http-rxjs/searches/local-ref-search.ts</p>
            <h4>Local ref on input and observer.next(value) Youtube search example </h4>
            
            <input #inny (keyup)="source$.next(inny.value)" placeholder="Youtube Search">
            <pre>There are {{results.length}} search results for {{searchTerm}}</pre>
            <youtube-result-component *ngFor="let result of results" [result]="result"></youtube-result-component>
        </div>
    `
})
export class LocalRefSearch {
  source$: Rx.Subject<any>;
  results: SearchResult[] = [];
  searchTerm: string = '';

  constructor(public youtube: YoutubeService) {
    this.source$ = new Rx.Subject();

    this.source$
      .debounceTime(500)
      .do((text: string) => this.searchTerm = text)
      .switchMap((text: string) => this.youtube.search(text)) //i think switchMap used to be flatMapLatest
      .subscribe((results: SearchResult[]) => this.results = results);
  }


}
