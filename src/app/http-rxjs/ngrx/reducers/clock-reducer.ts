import {Action} from "@ngrx/store";
import {HOUR, SECOND} from "../actions";

export class MyAction implements Action {
  id ?: number;
  payload ?: any;
  type: string;
}

export const clock = (state: Date = new Date(), action: MyAction) => {
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
