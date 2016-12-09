import {Component, EventEmitter, ElementRef, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import {SearchResult} from './youtube-helpers/youtube-result-class';
import {YoutubeService} from './youtube-helpers/youtube-service';
let loadingGif: string = require('../../../images/loading.gif');


@Component({
  selector: 'youtube-search',
  template: `Search <input placeholder="Search Youtube">`,
  outputs: ['loading', 'results'],
})
export class YoutubeSearch implements OnInit {
  loading: EventEmitter<any> = new EventEmitter();
  results: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private ytService: YoutubeService) {
    console.log(this, ytService);
  }

  ngOnInit() {
    Rx.Observable.fromEvent(this.el.nativeElement, "keyup")
      .debounceTime(500)
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.ytService.search(query))
      .switch() // .map().switch() === switchMap()
      .subscribe(
        (results: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}

@Component({
  selector: 'ngbook-youtube-example',
  template: `
        <div class="search-results">
            <h4>NG2-Book YouTube search example:</h4>
            <youtube-search
                (loading)="loading = $event"
                (results)="updateResults($event)">
            </youtube-search>
            <img src="${loadingGif}" *ngIf="loading">
            <youtube-result-component *ngFor="let result of results" [result]="result"></youtube-result-component>
        </div>
    `
})
export class YoutubeExample {
  loading: boolean = false;
  results: SearchResult[];

  constructor() {
    console.log(this);
  }

  updateResults(results: SearchResult[]) {
    console.log(results);
    this.results = results;
  }
}
