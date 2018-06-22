import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {Subject} from "rxjs/Subject";
import {DAY, HOUR, SECOND} from "../actions";

@Component({
  selector: "ngrx-clock-one",
  template: `
        <p class="path">src/app/http-rxjs/ngrx/ngrx-clock/example-clock-one.ts</p>
        <h4>Clock 1 (Taken from a John Linquist Plunk)</h4>
        
        <button (click)="hourBackward$.next()">Hour -1</button>
        <button (click)="hourForward$.next()">Hour +1</button>
        <div></div>
        <button (click)="dayBackward$.next()">Day -1</button>
        <button (click)="dayForward$.next()">Day +1</button>
        <div></div>
    {{clock$ | async | date:'yyyy MMMM EEE d hh:mm:ss'}}    
`
})
export class NgRxClock1 {
  clock$;
  hourBackward$ = new Subject().mapTo({type: HOUR, payload: -1});
  hourForward$ = new Subject().mapTo({type: HOUR, payload: 1});
  dayBackward$ = new Subject().mapTo({type: DAY, payload: -1});
  dayForward$ = new Subject().mapTo({type: DAY, payload: 1});

  constructor(private store: Store<any>) {
    // the ngrx store is a BehaviorSubject so it's an Observer as well as an Observable
    Observable.merge(
      this.hourBackward$,
      this.hourForward$,
      this.dayBackward$,
      this.dayForward$,
      Observable.interval(1000).mapTo({type: SECOND, payload: 1})
    ).subscribe(store);

    this.clock$ = store.select("tick");
  }
}
