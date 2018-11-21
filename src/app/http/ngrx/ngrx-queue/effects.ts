import "@ngrx/core/add/operator/select";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/observable/interval";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs";
import {ADD_TO_QUEUE, GROW_QUEUE} from "../actions";
import {AddUnitAction, Unit} from "./ngrx-queue.component";

@Injectable()
export class UnitEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  growUnit$ = this.actions$
    .ofType(ADD_TO_QUEUE)
    .map((action: AddUnitAction) => action.payload)
    .mergeMap((unit: Unit) => {
      return Observable
        .interval(Math.random() * 250 + 100)
        .mapTo({type: GROW_QUEUE, payload: unit.id});
    });
}
