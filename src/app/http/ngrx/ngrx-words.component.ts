import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {interval, Observable} from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import {mapTo} from "rxjs/operators";


@Component({
  selector: 'ngrx-words-component',
  template: `
    <p class='path'>/http-rxjs/misc-examples/ngrx-starter.ts</p>
    <h4>Basic NgRx example</h4>
    <a href='http://plnkr.co/edit/avLMS3m0VNMXSfUhT7K9?p=preview' target='_blank'>Original Plunk</a>
    <p style='color: red; margin-bottom: 10px'>{{word$ | async}}</p>
    <start-stop-rx-stream-component 
      [stream$]="interval$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxWordsComponent implements OnInit {
  public word$: Observable<string>;
  public interval$: Observable<string>;

  constructor(private store: Store<string>) {
  }

  ngOnInit() {
    this.word$ = this.store.select('wordsReducer');
    this.interval$ = interval(500).pipe(mapTo('random'));
  }

  dispatch(type) {
    this.store.dispatch({type});
  }

}
