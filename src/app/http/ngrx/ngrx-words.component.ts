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
        <dlink [id]="14"></dlink>
        <dlink [id]="5"></dlink>
    </div>
    <p style='color: red; margin-bottom: 10px'>{{word1}} | {{word2}} | {{word3$ | async}}</p>

    <start-stop-rx-stream-component
      [stream$]="interval$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxWordsComponent implements OnInit {
  public unsubscribe$ = new Subject<void>();
  public word1: string;
  public word2: string;
  public word3$: Observable<string>;
  public interval$: Observable<string>;

  constructor(public store: Store<MyNgRxStore>, public cd : ChangeDetectorRef) {
  }

  ngOnInit() {
    // this is one way to subscribe to the store (reducer)
    this.store
      .pipe(select((state: MyNgRxStore) => state.wordsReducer), takeUntil(this.unsubscribe$))
      .subscribe((word:string) => this.word1 = word);

    // this is another way to subscribe to a store (reducer)
    this.store.select('wordsReducer').subscribe(word => this.word2 = word);

    // this is another way to subscribe to a store where we use the async filter
    this.word3$ = this.store.select('wordsReducer');

    this.interval$ = interval(500).pipe(mapTo('random')); // 'random' is the words-reducer action
  }

  // in this case the reducer name will always be random
  dispatch(reducerAction: string) {
    this.store.dispatch({type: reducerAction});
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
