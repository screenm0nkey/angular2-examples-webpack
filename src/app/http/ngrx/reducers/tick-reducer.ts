import { createReducer, on } from '@ngrx/store';
import { dayTickAction, hourTickAction, secondTickAction } from "../actions";
import { MyAction } from "./_reducers.service";


const featureReducer = createReducer(
  new Date(),
  on(secondTickAction, (state, { payload }) => {
    const d = new Date(state.getTime());
    d.setSeconds(d.getSeconds() + payload);
    return d;
  }),
  on(hourTickAction, (state, { payload }) => {
    const d = new Date(state.getTime());
    d.setHours(d.getHours() + payload);
    return d;
  }),
  on(dayTickAction, (state, { payload }) => {
    const d = new Date(state.getTime());
    d.setDate(d.getDate() + payload);
    return d;
  }),
)

export function tickReducer(state: Date | undefined, action: MyAction) {
  return featureReducer(state, action);
}

/*
Below is the old way to write a reducer
https://ultimatecourses.com/blog/how-to-upgrade-your-angular-and-ngrx-apps-to-v8

export const tickReducerOld = (state: Date = new Date(), action: MyAction) => {
  let d: Date;
  switch (action.type) {
    case DAY_TICK:
      d = new Date(state.getTime());
      d.setDate(d.getDate() + action.payload);
      return d;
    case HOUR_TICK:
      d = new Date(state.getTime());
      d.setHours(d.getHours() + action.payload);
      return d;
    case SECOND_TICK:
      d = new Date(state.getTime());
      d.setSeconds(d.getSeconds() + action.payload);
      return d;
    default:
      return state;
  }
};
*/
