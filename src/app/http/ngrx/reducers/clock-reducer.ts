import { createReducer, on } from '@ngrx/store';
import { clockHourAction, clockSecondAction } from "../actions";
import { MyAction } from "./_reducers.service";

const featureReducer = createReducer(
  new Date(),
  on(clockSecondAction, (state, { payload }) => {
    const date = new Date(state.getTime());
    date.setSeconds(date.getSeconds() + parseInt(payload));
    return date;
  }),
  on(clockHourAction, (state, { payload }) => {
    const date = new Date(state.getTime());
    date.setHours(date.getHours() + parseInt(payload));
    return date;
  })
)

export function clockReducer(state: Date | undefined, action: MyAction) {
  return featureReducer(state, action);
}

/*
export const clockReducer = (state: Date = new Date(), action: MyAction) => {
  const date = new Date(state.getTime());
  switch (action.type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + parseInt(action.payload));
      return date;
    case HOUR:
      date.setHours(date.getHours() + parseInt(action.payload));
      return date;
    default:
      return state;
  }
};
*/