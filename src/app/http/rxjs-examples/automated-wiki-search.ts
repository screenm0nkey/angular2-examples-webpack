import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikiSearchService } from '../searches/wikipedia-search.service';
import { from, Observable, of, range } from 'rxjs';
import { concatMap, debounceTime, delay, filter, map, scan, share, switchMap, tap, zip } from 'rxjs/operators';

@Component({
  selector: 'auto-wiki-search',
  template: `
    <div>
      <p class='path'>/http-rxjs/misc-examples/automated-wiki-search.ts</p>
      <h4>Automated Wiki Search</h4>

      <button (click)='startIt()'>Initialise search</button>
      <button (click)='this.search = true'>Play</button>
      <button (click)='this.search = false'>Pause</button>
      <input type='text' [value]='term$ | async'>
      <ul>
        <li *ngFor='let result of results$ | async'>{{result}}</li>
      </ul>
    </div>
  `
})
export class AutoSearch implements OnInit {
  search: boolean = false;
  text: string;
  randomInterval$: Observable<any>;
  term$: Observable<any>;
  results$: Observable<any>;

  constructor(public http: HttpClient, private wiki: WikiSearchService) {

  }

  ngOnInit() {
    this.text = `Dog fish cat`;
  }

  startIt() {
    const randomDelay = (num: number) => of(num).pipe(delay(Math.random() * 2000));

    this.randomInterval$ = range(0, 1000)
      .pipe(concatMap(randomDelay))
      .pipe(filter(() => this.search))
      .pipe(tap(data => console.log('%crandom delay ' + data + 'ms', 'color:pink')));

    this.term$ = from(this.text)
      .pipe(tap(data => console.log('%c' + data, 'color:red')))
      .pipe(zip(this.randomInterval$, x => x))
      .pipe(tap(data => console.log('%czip ' + data, 'color:orange')))
      .pipe(scan((acc: string, curr: string) => (curr === ' ' ? '' : acc + curr)))
      .pipe(tap(data => console.log('%cscan ' + data, 'color:green')))
      .pipe(share());

    this.results$ = this.term$
      .pipe(debounceTime(250))
      .pipe(switchMap(term => this.wiki.search(term)))
      .pipe(map(res => res[1]));
  }

  searchWiki() {
    this.search = !this.search;
  }
}


