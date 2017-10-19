import "@ngrx/core/add/operator/select";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/observable/interval";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {ADD, GROW} from "./actions";

@Injectable()
export class UnitEffects {

  constructor(private updates$: Actions) {
  }

  @Effect()
  growUnit$ = this.updates$
    .ofType(ADD)
    .map(action => action.payload)
    .mergeMap(unit => {
      return Observable.interval(Math.random() * 250 + 100)
        .mapTo({type: GROW, payload: unit.id})
    });
}
