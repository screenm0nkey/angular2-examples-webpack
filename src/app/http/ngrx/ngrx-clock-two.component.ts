import {Component, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/withLatestFrom";
import {Store} from "@ngrx/store";
import {HOUR, SECOND} from "./actions";
import { MyAction} from "./reducers/_reducers.service";

/**
 * ngrx-clock-two-component
 */
@Component({
  selector: "ngrx-clock-two-component",
  template: `
    <p class="path">src/app/http/ngrx/ngrx-clock/ngrx-clock-two.component.ts</p>
    <h4>Udate Hours Clock 2</h4>
    <a href="https://github.com/johnlindquist/rxjs-in-angular2" target="_blank">rxjs-in-angular2</a>
    
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
  updateHours$: any;
  seconds$: Observable<MyAction>;
  time$: Observable<Date>;
  merged$: Observable<{}|MyAction>;

  constructor(private store: Store<any>) {
    this.dispatch = this.dispatch.bind(this);
  }

  ngOnInit() {
    this.time$ = this.store.select("clockReducer");
    this.updateHours$ = new Subject().map(value => ({type: HOUR, payload: value}));
    this.seconds$ = Observable.interval(1000).mapTo({type: SECOND, payload: 1});
    this.merged$ = Observable.merge(this.updateHours$, this.seconds$);
  }

  dispatch(evt: MyAction): void {
    console.log(`%cNgrxClockTwoComponent`, 'color:yellow', evt);
    this.store.dispatch(evt);
  }


}








