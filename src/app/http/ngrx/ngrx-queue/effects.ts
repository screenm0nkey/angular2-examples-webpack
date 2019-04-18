import "@ngrx/core/add/operator/select";
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {interval} from "rxjs";
import {ADD_TO_QUEUE, GROW_QUEUE} from "../actions";
import {map, mapTo, mergeMap} from "rxjs/operators";
import {AddUnitAction, Unit} from "../reducers/_reducers.service";

@Injectable({providedIn: 'root'})
export class UnitEffects {
  constructor(private actions$: Actions) {
  }

  @Effect()
  growUnit$ = this.actions$
    .pipe(ofType(ADD_TO_QUEUE))
    .pipe(map((action: AddUnitAction) => action.payload))
    .pipe(mergeMap(this.nick));


  nick(unit: Unit) {
    return interval(Math.random() * 250 + 100)
      .pipe(mapTo({type: GROW_QUEUE, payload: unit.id}));
  }
}
