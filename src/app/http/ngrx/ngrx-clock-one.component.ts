import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { interval, merge, Observable, Subject } from "rxjs";
import { mapTo } from "rxjs/operators";
import { dayTickAction, hourTickAction, secondTickAction } from "./actions";
import { MyAction, MyNgRxStores as AppState } from "./reducers/_reducers.service";

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

  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {
    this.time$ = this.store.select("tickReducer");
    this.hourBackward$ = new Subject();
    this.hourForward$ = new Subject();
    this.dayBackward$ = new Subject();
    this.dayForward$ = new Subject();
    this.merged$ = merge(
      this.hourBackward$.pipe(mapTo(hourTickAction({ payload: -1 }))),
      this.hourForward$.pipe(mapTo(hourTickAction({ payload: 1 }))),
      this.dayForward$.pipe(mapTo(dayTickAction({ payload: 1 }))),
      this.dayBackward$.pipe(mapTo(dayTickAction({ payload: -1 }))),
      interval(1000).pipe(mapTo(secondTickAction({ payload: 1 })))
    );
  }

  // the ngrx store is a BehaviorSubject so it's an Observer as well as an Observable
  dispatch(evt: MyAction): void {
    console.log(`%cNgrxClockOneComponent`, 'color:lime', evt);
    this.store.dispatch(evt);
  }
}
