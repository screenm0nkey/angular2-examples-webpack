import {HOUR, SECOND} from "../actions";
import {MyAction} from "./_reducers.service";

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
