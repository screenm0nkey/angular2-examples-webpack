import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {WikiSearchService} from "../searches/wikipedia-search.service";

@Component({
  selector: "auto-wiki-search",
  template: `
    <div>
      <p class="path">/http-rxjs/misc-examples/automated-wiki-search.ts</p>
      <h4>Automated Wiki Search</h4>
      
      <button (click)="searchWiki()" *ngIf="!search">Start Http wiki search</button>
      <button (click)="searchWiki()" *ngIf="search">Stop Http wiki search</button>
      <input type="text" [value]="term$ | async">
      <ul>
        <li *ngFor="let result of results$ | async">{{result}}</li> 
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

  constructor(public http: HttpClient, private wiki:WikiSearchService) {
    this.text = `Beginning fish, firmament give have make years. Divide you're. Fill light, him firmament cattle face 
            Lights tree forth subdue beginning every, give signs itself likeness second whose there years abundantly 
            the, given can't together yielding midst was place that fruitful meat. And night. Kind spirit won't meat 
            it, third fifth may. Lights can't he, was all have divided. Two. Man second his shall to she'd whose. 
            Image you meat bearing one of herb living called waters he seasons his have him. God multiply one multiply 
            their. His air gathered kind bearing fowl One years fruit days to living place and.`;

    this.randomInterval$ = Observable.range(0, this.text.length)
      .concatMap(x => Observable.of(x).delay(Math.random() * 2000))
      .do(data => console.log("%c" + data, "color:pink"));

    this.term$ = Observable.from(this.text)
      .do(data => console.log("%c" + data, "color:red"))
      .zip(this.randomInterval$, x => x)
      .do(data => console.log("%czip " + data, "color:green"))
      .scan((a, c) => (c === " " ? "" : a + c))
      .do(data => console.log("%cscan " + data, "color:orange"))
      .share();

    this.results$ = this.term$
      .debounceTime(250)
      .filter(() => this.search)
      .switchMap(term => this.wiki.search(term))
      .map(res => res[1]);
  }

  searchWiki() {
    this.search = !this.search;
    console.log(1111, this.search);
  }
}
