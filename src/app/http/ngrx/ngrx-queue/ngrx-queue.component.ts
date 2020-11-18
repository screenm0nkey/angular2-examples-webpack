import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Unit } from "../reducers/_reducers.service";
import { ADD_TO_QUEUE } from './actions';

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
    <p class="path">http/ngrx/ngrx-queue/ngrx-queue.component.ts</p>
    <h4>NgRx Effects Example</h4>

    <dlink [id]="17"></dlink>
    
    <button (click)="onClick()">
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

  constructor(public store: Store<{ queueReducer: Unit[] }>) {
    this.unitsInProgress$ = this.store.select("queueReducer")
      .pipe(map((queue: Unit[]) => queue.filter(u => !u.completed)));

    this.unitsReady$ = this.store.select("queueReducer")
      .pipe(map((queue: Unit[]) => queue.filter(u => u.completed)));
  }

  onClick() {
    this.store.dispatch({ type: ADD_TO_QUEUE, payload: createUnit() });
  }
}
