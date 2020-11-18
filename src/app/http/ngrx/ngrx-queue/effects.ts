import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { interval, Observable } from "rxjs";
import { map, mapTo, mergeMap } from "rxjs/operators";
import { AddUnitAction, Unit } from "../reducers/_reducers.service";
import { ADD_TO_QUEUE, GROW_QUEUE } from './actions';

@Injectable({ providedIn: 'root' })
export class UnitEffects {

  // Effects are injectable services and are added like so;
  // EffectsModule.forRoot([UnitEffects])
  @Effect()
  growUnit$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType<AddUnitAction>(ADD_TO_QUEUE),
        map((action: AddUnitAction) => action.payload),
        mergeMap(this.addRandomInterval)
      )
  );

  constructor(public actions$: Actions) { }


  private addRandomInterval(unit: Unit): Observable<{ type: string, payload: number }> {
    const ms = (Math.round(Math.random() * 4) + 1) * 1000;
    return interval(ms)
      .pipe(mapTo({ type: GROW_QUEUE, payload: unit.id }));
  }
}
