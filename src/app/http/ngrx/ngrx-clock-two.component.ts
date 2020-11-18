import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { interval, merge, Observable, Subject } from "rxjs";
import { map, mapTo, takeUntil } from "rxjs/operators";
import { hourTickAction, secondTickAction } from "./actions";
import { MyAction, MyNgRxStores } from "./reducers/_reducers.service";

/**
 * ngrx-clock-two-component
 */
@Component({
  selector: "ngrx-clock-two-component",
  template: `
    <p class="path">http/ngrx/ngrx-clock/ngrx-clock-two.component.ts</p>
    <h4>Udate Hours Clock 2</h4>
    <dlink [id]="32"></dlink>

    <input #inputNum type="number" value="0">
    <button (click)="updateHours$.next(inputNum.value)">Update Hours</button>
    <clock-component [time$]="time$"></clock-component>

    <start-stop-rx-stream-component
      [stream$]="merged$"
      (evt)="dispatch($event)">
    </start-stop-rx-stream-component>
  `
})
export class NgrxClockTwoComponent implements OnInit, OnDestroy {
  updateHours$: Subject<any>;
  destroy$: Subject<any>;
  seconds$: Observable<MyAction>;
  time$: Observable<Date>;
  merged$: Observable<{} | MyAction>;

  constructor(public store: Store<MyNgRxStores>) {
    this.dispatch = this.dispatch.bind(this);
  }

  ngOnInit() {
    this.time$ = this.store.select("clockReducer");
    this.updateHours$ = new Subject();
    this.seconds$ = interval(1000).pipe(mapTo(secondTickAction({ payload: 1 })));

    this.merged$ = merge(
      this.updateHours$.pipe(map(value => (hourTickAction({ payload: value })))),
      this.seconds$
    ).pipe(takeUntil(this.destroy$))
  }

  ngOnDestroy() {
  }

  dispatch(evt: MyAction): void {
    this.store.dispatch(evt);
  }


}








