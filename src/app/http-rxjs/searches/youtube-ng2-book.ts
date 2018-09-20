import {Component, ElementRef, EventEmitter, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, filter, map, switchMap, tap} from 'rxjs/operators';
import {SearchResult} from './youtube-helpers/youtube-result-class';
import {YoutubeService} from './youtube-helpers/youtube-service';
// @ts-ignore
let loadingGif: string = ''; // require('../../../images/loading.gif');

@Component({
  selector: 'youtube-search',
  template: `Search <input placeholder='Search Youtube'>`,
  outputs: ['loading', 'results']
})
export class NgBookYoutubeSearch implements OnInit {
  loading: EventEmitter<any> = new EventEmitter();
  results: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private ytService: YoutubeService) {
    console.log(this, ytService);
  }

  isLongerThanOneChar(text: string) {
    if (text.length <= 1) this.results.emit([]);
    return text.length > 1;
  }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .pipe(map((e: any) => e.target.value))
      .pipe(filter(this.isLongerThanOneChar.bind(this)))
      .pipe(tap(() => this.loading.emit(true)))
      .pipe(switchMap(map((query: string) => this.ytService.search(query))))
      .subscribe(
        (results: any) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => this.loading.emit(false),
        () => this.loading.emit(false));
  }
}

@Component({
  selector: 'ngbook-youtube-example',
  template: `
        <div class='search-results' style='padding-bottom:10px'>
          <p class='path'>/http-rxjs/searches/youtube-ng2-book.ts</p>
            <h4>NG2-Book YouTube search example:</h4>
            <youtube-search
                (loading)='loading = $event'
                (results)='updateResults($event)'>
            </youtube-search>
            <img src='${loadingGif}' *ngIf='loading'>
            <youtube-result-component *ngFor='let result of results' [result]='result'></youtube-result-component>
        </div>
    `
})
export class NgBookYoutubeExample {
  loading: boolean = false;
  results: SearchResult[];

  updateResults(results: SearchResult[]) {
    console.log(results);
    this.results = results;
  }
}
