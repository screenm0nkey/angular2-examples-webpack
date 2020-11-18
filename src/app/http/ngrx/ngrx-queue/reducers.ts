import { createReducer, on } from '@ngrx/store';
import { GROW_UNIT } from '../actions';
import { unitReducer } from "../reducers/unit-reducer";
import { NumberAction, Unit } from "../reducers/_reducers.service";
import { addToQueueAction, growQueueAction } from './actions';


const featureReducer = createReducer(
  [],
  on(addToQueueAction, (state, { payload }) => {
    return [...state, payload];
  }),
  on(growQueueAction, (state, { payload }) => {
    return state.map(u => {
      if (u.id === payload) {
        return unitReducer(u, { type: GROW_UNIT, payload });
      }
      return u;
    });
  }),
)

export function queueReducer(state: Unit[] | undefined, action: NumberAction) {
  return featureReducer(state, action);
}

