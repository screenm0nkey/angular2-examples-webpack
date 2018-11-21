import {Component, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {DAY_TICK, HOUR_TICK, SECOND_TICK} from "./actions";
import {MyAction} from "./reducers/_reducers.service";

@Component({
  selector: "ngrx-clock-one-component",
  template: `
    <p class="path">src/app/http/ngrx/ngrx-clock/ngrx-clock-one.component.ts</p>
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
  hourBackward$: Observable<MyAction>;
  hourForward$: Observable<MyAction>;
  dayBackward$: Observable<MyAction>;
  dayForward$: Observable<MyAction>;
  merged$: Observable<MyAction>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.time$ = this.store.select("tickReducer");
    this.hourBackward$ = new Subject().mapTo({type: HOUR_TICK, payload: -1});
    this.hourForward$ = new Subject().mapTo({type: HOUR_TICK, payload: 1});
    this.dayBackward$ = new Subject().mapTo({type: DAY_TICK, payload: -1});
    this.dayForward$ = new Subject().mapTo({type: DAY_TICK, payload: 1});
    const interval$ = Observable.interval(1000).mapTo({type: SECOND_TICK, payload: 1});
    this.merged$ = Observable.merge(this.hourBackward$, this.hourForward$, this.dayBackward$, this.dayForward$, interval$);
  }

  // the ngrx store is a BehaviorSubject so it's an Observer as well as an Observable
  dispatch(evt: MyAction): void {
    console.log(`%cNgrxClockOneComponent`, 'color:lime', evt);
    this.store.dispatch(evt);
  }
}
