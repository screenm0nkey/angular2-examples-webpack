import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WikiSearchService} from '../searches/wikipedia-search.service';
import {from, Observable, of, range} from 'rxjs';
import {concatMap, debounceTime, delay, filter, map, zip, scan, share, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'auto-wiki-search',
  template: `
    <div>
      <p class='path'>/http-rxjs/misc-examples/automated-wiki-search.ts</p>
      <h4>Automated Wiki Search</h4>

      <button (click)='searchWiki()' *ngIf='!search'>Start Http wiki search</button>
      <button (click)='searchWiki()' *ngIf='search'>Stop Http wiki search</button>
      <input type='text' [value]='term$ | async'>
      <ul>
        <li *ngFor='let result of results$ | async'>{{result}}</li>
      </ul>
    </div>
  `
})
export class AutoSearch {
  search: boolean = false;
  text: string;
  randomInterval$: Observable<any>;
  term$: Observable<any>;
  results$: Observable<any>;

  constructor(public http: HttpClient, private wiki: WikiSearchService) {
    this.text = `Beginning fish, firmament give have make years. Divide you're. Fill light, him firmament cattle face 
            Lights tree forth subdue beginning every, give signs itself likeness second whose there years abundantly 
            the, given can't together yielding midst was place that fruitful meat. And night. Kind spirit won't meat 
            it, third fifth may. Lights can't he, was all have divided. Two. Man second his shall to she'd whose. 
            Image you meat bearing one of herb living called waters he seasons his have him. God multiply one multiply 
            their. His air gathered kind bearing fowl One years fruit days to living place and.`;

    const randomDelay = (num:number) => of(num).pipe(delay(Math.random() * 2000));

    this.randomInterval$ = range(0, this.text.length)
      .pipe(concatMap(randomDelay))
      .pipe(tap(data => console.log('%crandom delay' + data, 'color:pink')));

    this.term$ = from(this.text)
      .pipe(tap(data => console.log('%c' + data, 'color:red')))
      // @ts-ignore
      .pipe(zip(this.randomInterval$, x => x))
      .pipe(tap(data => console.log('%czip ' + data, 'color:orange')))
      .pipe(scan((a: string, c: string) => (c === ' ' ? '' : a + c)))
      .pipe(tap(data => console.log('%cscan ' + data, 'color:green')))
      .pipe(share());

    this.results$ = this.term$
      .pipe(debounceTime(250))
      .pipe(filter(() => this.search))
      .pipe(switchMap(term => this.wiki.search(term)))
      .pipe(map(res => res[1]));
  }

  searchWiki() {
    this.search = !this.search;
    console.log(1111, this.search);
  }
}


