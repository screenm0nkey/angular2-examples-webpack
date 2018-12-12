import {DAY_TICK, HOUR_TICK, SECOND_TICK} from "../actions";
import {MyAction} from "./_reducers.service";

export const tickReducer = (state: Date = new Date(), action: MyAction) => {
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
