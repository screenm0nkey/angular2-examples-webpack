import "@ngrx/core/add/operator/select";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/observable/interval";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {interval} from "rxjs";
import {ADD_TO_QUEUE, GROW_QUEUE} from "../actions";
import {AddUnitAction, Unit} from "./ngrx-queue.component";
import {map, mapTo, mergeMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class UnitEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  growUnit$ = this.actions$
    .ofType(ADD_TO_QUEUE)
    .pipe(map((action: AddUnitAction) => action.payload))
    .pipe(mergeMap((unit: Unit) => {
      return interval(Math.random() * 250 + 100)
        .pipe(mapTo({type: GROW_QUEUE, payload: unit.id}));
    }));
}
