import { Store } from "@ngrx/store";
import { Component } from "@angular/core";
import { ADD } from "./actions";
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

let id = 0;
let next = () => ++id;

const createUnit = (health = 0) => {
  return {
    id: next(),
    health,
    ready: false
  };
};

@Component({
  selector: "my-app",
  styles: [
    `
    :host{
      font-family: Arial;
    }
  `
  ],
  template: `
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
export class NgRxQueueAppComponent {
  unitsInProgress$ = this.store
    .select("queue")
    .map((queue: any) => queue.filter(u => !u.ready));
  unitsReady$ = this.store
    .select("queue")
    .map((queue: any) => queue.filter(u => u.ready));

  onClick(event) {
    this.store.dispatch({ type: ADD, payload: createUnit() });
  }

  constructor(public store: Store<any>) {}
}
