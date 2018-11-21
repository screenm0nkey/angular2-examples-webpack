import {Store} from "@ngrx/store";
import {Component} from "@angular/core";
import {ADD_TO_QUEUE} from "../actions";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/switchMapTo";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/distinctUntilKeyChanged";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/from";
import {Observable} from "rxjs/internal/Observable";

export interface Unit {
  id: number;
  health: number;
  completed: boolean;
}
export interface AddUnitAction {
  type: string;
  payload : Unit
}

let id = 0;
let next = () => ++id;

const createUnit = (health = 0): Unit => ({
  id: next(),
  health,
  completed: false
});

@Component({
  selector: "ngrx-queue-component",
  styles: [
    `
    :host{
      font-family: Arial;
    }
  `
  ],
  template: `
    <p class="file">src/app/http-rxjs/ngrx/ngrx-queue/app.component.ts</p>
    <h4>NgRx Queue</h4>
    <a href="http://plnkr.co/edit/E57afQC5zwSQFt2oH5Z0?p=preview" target="_blank">Plunk</a>
    
    <button (click)="onClick($event)">
      Add to queue
    </button>
    
    <h2>Queue</h2>
    <div *ngFor="let unit of unitsInProgress$ | async">
      {{unit | json}}
    </div>
    
    <h2>Complete</h2>
    <div *ngFor="let unit of unitsReady$ | async">
      {{unit | json}}
    </div>
`
})
export class NgrxQueueComponent {
  unitsInProgress$: Observable<Unit[]>;
  unitsReady$: Observable<Unit[]>;

  constructor(public store: Store<any>) {
    this.unitsInProgress$ = this.store.select("queueReducer")
      .map((queue: Unit[]) => queue.filter(u => !u.completed));

    this.unitsReady$ = this.store.select("queueReducer")
      .map((queue: Unit[]) => queue.filter(u => u.completed));
  }

  onClick() {
    this.store.dispatch({type: ADD_TO_QUEUE, payload: createUnit()});
  }
}
