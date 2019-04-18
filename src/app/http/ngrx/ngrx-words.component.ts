import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {interval, Observable, Subject} from 'rxjs';
import {mapTo, takeUntil} from "rxjs/operators";
import {MyNgRxStore} from "./reducers/_reducers.service";


@Component({
  selector: 'ngrx-words-component',
  template: `
    <p class='path'>/http-rxjs/misc-examples/ngrx-starter.ts</p>
    <h4>3 Ways of subscribing to a an NGRX store. 1 Way to unsubscribe</h4>
    <div class="links">
      <a href='http://plnkr.co/edit/avLMS3m0VNMXSfUhT7K9?p=preview' target='_blank'>Original Plunk</a>
      <a
        href="https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794"
        target="_blank">Subscribe vs Async in NgRx</a>
    </div>
    <p style='color: red; margin-bottom: 10px'>{{word1}} | {{word2}} | {{word3$ | async}}</p>

    <start-stop-rx-stream-component
      [stream$]="interval$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxWordsComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  public word1: string;
  public word2: string;
  public word3$: Observable<string>;
  public interval$: Observable<string>;

  constructor(private store: Store<MyNgRxStore>, private cd : ChangeDetectorRef) {
  }

  ngOnInit() {
    // this is one way to subscribe and subscribe
    this.store
      .pipe(select((state: MyNgRxStore) => state.wordsReducer), takeUntil(this.unsubscribe$))
      .subscribe((word:string) => this.word1 = word);

    // this is another way to subscribe to a store
    this.store.select('wordsReducer').subscribe(word => this.word2 = word);

    // this is another way to subscribe to a store where we use the async filter
    this.word3$ = this.store.select('wordsReducer');

    this.interval$ = interval(500).pipe(mapTo('random')); // random is the reducer name
  }

  // in this case the reducer name will always be random
  dispatch(reducerName: string) {
    this.store.dispatch({type: reducerName});
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
