import {Component, OnInit} from "@angular/core";
import {interval, merge, Observable, Subject} from "rxjs";
import {map, mapTo} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {HOUR, SECOND} from "./actions";
import {MyAction, MyNgRxStore} from "./reducers/_reducers.service";

/**
 * ngrx-clock-two-component
 */
@Component({
  selector: "ngrx-clock-two-component",
  template: `
    <p class="path">http/ngrx/ngrx-clock/ngrx-clock-two.component.ts</p>
    <h4>Udate Hours Clock 2</h4>
    <external-link [id]="32"></external-link>

    <input #inputNum type="number" value="0">
    <button (click)="updateHours$.next(inputNum.value)">Update Hours</button>
    <clock-component [time$]="time$"></clock-component>

    <start-stop-rx-stream-component
      [stream$]="merged$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxClockTwoComponent implements OnInit {
  updateHours$: Subject<any>;
  seconds$: Observable<MyAction>;
  time$: Observable<Date>;
  merged$: Observable<{} | MyAction>;

  constructor(private store: Store<MyNgRxStore>) {
    this.dispatch = this.dispatch.bind(this);
  }

  ngOnInit() {
    this.time$ = this.store.select("clockReducer");
    this.updateHours$ = new Subject();
    this.seconds$ = interval(1000).pipe(mapTo({type: SECOND, payload: 1}));

    this.merged$ = merge(
      this.updateHours$.pipe(map(value => ({type: HOUR, payload: value}))),
      this.seconds$
    );
  }

  dispatch(evt: MyAction): void {
    console.log(`%cNgrxClockTwoComponent`, 'color:yellow', evt);
    this.store.dispatch(evt);
  }


}








