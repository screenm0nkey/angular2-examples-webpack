import {Store} from "@ngrx/store";
import {Component} from "@angular/core";
import {ADD_TO_QUEUE} from "../actions";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {MyNgRxStore, Unit} from "../reducers/_reducers.service";

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
    <p class="file">http/ngrx/ngrx-queue/ngrx-queue.component.ts</p>
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

  constructor(public store: Store<MyNgRxStore>) {
    this.unitsInProgress$ = this.store.select("queueReducer")
      .pipe(map((queue: Unit[]) => queue.filter(u => !u.completed)));

    this.unitsReady$ = this.store.select("queueReducer")
      .pipe(map((queue: Unit[]) => queue.filter(u => u.completed)));
  }

  onClick() {
    this.store.dispatch({type: ADD_TO_QUEUE, payload: createUnit()});
  }
}
