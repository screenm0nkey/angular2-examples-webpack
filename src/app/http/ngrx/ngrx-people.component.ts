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
import {ADVANCE, RECALL, SECOND} from "./actions";
import {MyAction} from "./reducers/_reducers.service";

/**
 * ngrx-clockReducer-two-component
 */
@Component({
  selector: "ngrx-people-component",
  styles: ['.advance {cursor:pointer}; font-size : 10px;', '.advance:hover {color:red}'],
  template: `
    <p class="path">src/app/http/ngrx/ngrx-clock/ngrx-clock-two.component.ts</p>
    <h4>Building a Time Machine using withLatestFrom (Egghead example)</h4>
        
    <p class="strong" style="margin:10px 0 0 0">Every time the users below are clicked, their individual times will increase by one hour</p>
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
  person$: any;
  seconds$: Observable<MyAction>;
  time$: Observable<Date>;
  people$;
  merged$: Observable<any>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    const recallSubject$ = new Subject()
    this.time$ = this.store.select("clockReducer");
    this.people$ = this.store.select("peoplezReducer");

    this.person$ = new Subject().map(value => ({payload: value, type: ADVANCE}));
    this.seconds$ = Observable.interval(1000).mapTo({type: SECOND, payload: 1});
    this.recall$ = recallSubject$
      .withLatestFrom(this.time$, (_, y) => y)
      .map(time => ({type: RECALL, payload: time}));

    this.merged$ = Observable.merge(this.seconds$, this.person$, this.recall$);

  }

  dispatch(evt: any): void {
    console.log(`%cNgrxPeopleComponent`, 'color:deeppink', evt);
    this.store.dispatch(evt);
  }


}








