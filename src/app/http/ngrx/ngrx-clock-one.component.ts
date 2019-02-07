import {Component, OnInit} from "@angular/core";
import {interval, merge, Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {DAY_TICK, HOUR_TICK, SECOND_TICK} from "./actions";
import {MyAction} from "./reducers/_reducers.service";
import {mapTo} from "rxjs/operators";

/**
 * ngrx-clock-one-component
 */
@Component({
  selector: "ngrx-clock-one-component",
  template: `
    <p class="path">http/ngrx/ngrx-clock/ngrx-clock-one.component.ts</p>
    <h4>Clock 1 (Taken from a John Linquist Plunk)</h4>

    <button (click)="hourBackward$.next()">Hour -1</button>
    <button (click)="hourForward$.next()">Hour +1</button>
    <button (click)="dayBackward$.next()">Day -1</button>
    <button (click)="dayForward$.next()">Day +1</button>
    <clock-component [time$]="time$"></clock-component>

    <start-stop-rx-stream-component
      [stream$]="merged$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgRxClockOneComponent implements OnInit {
  time$: Observable<Date>;
  hourBackward$: Subject<MyAction>;
  hourForward$: Subject<MyAction>;
  dayBackward$: Subject<MyAction>;
  dayForward$: Subject<MyAction>;
  merged$: Observable<MyAction>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.time$ = this.store.select("tickReducer");
    this.hourBackward$ = new Subject();
    this.hourForward$ = new Subject();
    this.dayBackward$ = new Subject();
    this.dayForward$ = new Subject();
    this.merged$ = merge(
      this.hourBackward$.pipe(mapTo({type: HOUR_TICK, payload: -1})),
      this.hourForward$.pipe(mapTo({type: HOUR_TICK, payload: 1})),
      this.dayBackward$.pipe(mapTo({type: DAY_TICK, payload: -1})),
      this.dayForward$.pipe(mapTo({type: DAY_TICK, payload: 1})),
      interval(1000).pipe(mapTo({type: SECOND_TICK, payload: 1}))
    );
  }

  // the ngrx store is a BehaviorSubject so it's an Observer as well as an Observable
  dispatch(evt: MyAction): void {
    console.log(`%cNgrxClockOneComponent`, 'color:lime', evt);
    this.store.dispatch(evt);
  }
}
