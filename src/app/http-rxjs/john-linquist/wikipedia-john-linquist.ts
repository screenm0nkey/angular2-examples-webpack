import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/race';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/bindCallback';
import 'rxjs/add/observable/merge';
import {Subject} from 'rxjs/Subject';
import {WikipediaService} from '../searches/wikipedia-search.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'john-linquist-wiki',
  providers: [WikipediaService],
  template: `
    <style>
        a {display: inline-block}
        img{
            height: 90px;
            width: 90px;
            border: 5px solid black;
        }
        img:hover {
        width: 90px;
            border: 5px solid gray;
        }
    </style>  
    <div>    
        <h4>John Linquist Wiki Image Search</h4>
        <a href="http://plnkr.co/edit/NXT6JPgr7QoR4SEYva7N?p=preview" target="_blank">Original Plunk</a>
        <input type="text" (input)="input$.next($event)">{{(searchTerm$ | async)}}
        <h3>{{imageCount$ | async}} results</h3>
        <div class="container">
            <a *ngFor="let image of images$ | async" [href]="image.descriptionurl" [title]="image.title">
                <img [src]="image.url" alt="">
            </a>
        </div>
    </div>
`
})
export class JohnLinquistWikiSearch {
  input$ = new Subject().map((event: Event) => {
    let target = <HTMLInputElement>event.target;
    return target.value;
  });
  searchTerm$;
  images$;
  imageCount$;

  constructor(wikipediaService: WikipediaService) {
    const term$ = this.input$
      .distinctUntilChanged()
      .debounceTime(250)
      .filter(term => term.length > 2)
      .share(); // make it hot

    const clear$ = this.input$
      .filter(term => term.length <= 2)
      .share();

    term$.subscribe(val =>console.log(1, val));
    clear$.subscribe(val =>console.log(2, val));

    this.searchTerm$ = Observable.merge(
      term$,
      clear$.map(term => 'Enter a term longer than 2 letters')
    );

    function WikipediaImageSearch(term): Observable<any[]> {
      return wikipediaService.searchAllImages(term) //3
        .map(wikipediaService.mapAllImagesToTitles) //4
        .concatAll()
        .mergeMap(wikipediaService.getImageInfoFromTitle) //5
        .takeUntil(this.input$)
        .map(wikipediaService.mapImageInfoToUrls) //6
        .scan((acc, curr)=> [...acc, ...curr])
    }

    const results$ = term$
      .switchMap(WikipediaImageSearch.bind(this))
      .startWith([])
      .share();

    results$.subscribe(val =>console.log(7, val));

    this.images$ = Observable.merge(results$, clear$.map(term => []));

    this.imageCount$ = this.images$
      .map(results => results.length)
  }
}
