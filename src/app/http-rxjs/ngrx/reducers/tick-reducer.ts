import {MyAction} from "./clock-reducer";
import {DAY, HOUR, SECOND} from "../actions";

export const tick = (state: Date = new Date(), action: MyAction) => {
  let d: Date;
  switch (action.type) {
    case DAY:
      d = new Date(state.getTime());
      d.setDate(d.getDate() + action.payload);
      return d;
    case HOUR:
      d = new Date(state.getTime());
      d.setHours(d.getHours() + action.payload);
      return d;
    case SECOND:
      d = new Date(state.getTime());
      d.setSeconds(d.getSeconds() + action.payload);
      return d;
    default:
      return state;
  }
};
