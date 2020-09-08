import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikiSearchService } from '../searches/wikipedia-search.service';
import { from, Observable, of, range } from 'rxjs';
import { concatMap, debounceTime, delay, filter, map, scan, share, switchMap, tap, zip } from 'rxjs/operators';

@Component({
  selector: 'auto-wiki-search',
  template: `
    <div>
      <p class="path">/http-rxjs/misc-examples/automated-wiki-search.ts</p>
      <h4>Automated Wiki Search</h4>

      <button (click)='startIt()' [disabled]="!buttonDisabled">Initialise search</button>
      <button (click)='this.search = true' [disabled]="buttonDisabled">Play</button>
      <button (click)='this.search = false' [disabled]="buttonDisabled">Pause</button>
      <input type='text' [value]='term$ | async'>
      <ul>
        <li *ngFor='let result of results$ | async'>{{result}}</li>
      </ul>
    </div>
  `
})
export class AutoSearch implements OnInit {
  search: boolean;
  text: string;
  randomInterval$: Observable<any>;
  term$: Observable<any>;
  results$: Observable<any>;
  buttonDisabled: boolean;

  constructor(public http: HttpClient, public wiki: WikiSearchService) {

  }

  ngOnInit() {
    this.search = false;
    this.text = `Dog Fish Cat Car`;
    this.buttonDisabled = true;
  }

  startIt() {
    const randomDelay = (num: number) => of(num).pipe(delay(Math.random() * 2000));

    this.randomInterval$ = range(0, 1000)
      .pipe(
        concatMap(randomDelay),
        filter(() => this.search),
        tap(data => console.log('%crandom delay ' + data + 'ms', 'color:pink'))
      );

    this.term$ = from(this.text).pipe(
      tap(data => console.log('%c' + data, 'color:red')),
      zip(this.randomInterval$, x => x),
      tap(data => console.log('%czip ' + data, 'color:orange')),
      scan((acc: string, curr: string) => (curr === ' ' ? '' : acc + curr)),
      tap(data => console.log('%cscan ' + data, 'color:green')),
      //share() — is a shortcut for multicast(() => new Subject()) + refCount()
      share()
    );

    this.results$ = this.term$.pipe(
      debounceTime(250),
      switchMap(term => this.wiki.search(term)),
      map(res => res[1])
    );
    this.buttonDisabled = false;
  }

  searchWiki() {
    this.search = !this.search;
  }
}


