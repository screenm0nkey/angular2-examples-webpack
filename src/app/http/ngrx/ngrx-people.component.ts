import {Component, OnInit} from "@angular/core";
import {interval, merge, Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {ADVANCE, RECALL, SECOND} from "./actions";
import {map, mapTo, withLatestFrom} from "rxjs/operators";
import {MyNgRxStore, PersonAction} from "./reducers/_reducers.service";

/**
 * ngrx-clockReducer-two-component
 */
@Component({
  selector: "ngrx-people-component",
  styles: ['.advance {cursor:pointer};font-size:10px;', '.advance:hover {color:red}'],
  template: `
    <p class="path">http/ngrx/ngrx-people.component.ts</p>
    <h4>Building a Time Machine using withLatestFrom (Egghead example)</h4>

    <p class="highlight" style="margin:10px 0 0 0">Every time the users below are clicked, their individual times will
      increase by one hour</p>
    <div
      (click)="person$.next(person)"
      class="advance"
      style="cursor: pointer"
      *ngFor="let person of people$ | async">
      {{person.name}} is in {{person.time | date:'medium'}} [Click Me]
    </div>
    <button (click)="recall$.next()">Reset all user's clocks</button>
    <start-stop-rx-stream-component
      [stream$]="merged$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxPeopleComponent implements OnInit {
  recall$: any;
  person$: Subject<any>;
  seconds$: Observable<number>;
  time$: Observable<Date>;
  people$: Observable<PersonAction>;
  merged$: Observable<any>;

  constructor(public store: Store<MyNgRxStore>) {
  }

  ngOnInit() {
    const recallSubject$ = new Subject();
    this.time$ = this.store.select("clockReducer");
    this.people$ = this.store.select("peoplezReducer");

    this.person$ = new Subject();
    this.seconds$ = interval(1000);
    this.recall$ = recallSubject$
      .pipe(withLatestFrom(this.time$, (_, y) => y))
      .pipe(map(time => ({type: RECALL, payload: time})));

    this.merged$ = merge(
      this.seconds$.pipe(mapTo({type: SECOND, payload: 1})),
      this.person$.pipe(map(value => ({payload: value, type: ADVANCE}))),
      this.recall$
    );

  }

  dispatch(evt: any): void {
    console.log(`%cNgrxPeopleComponent`, 'color:deeppink', evt);
    this.store.dispatch(evt);
  }


}








