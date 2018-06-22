import {MyAction} from "./clock-reducer";
import {GROW} from "../actions";

export const unit = (state, action: MyAction) => {
  switch (action.type) {
    case GROW:
      const {health, id} = state;
      return {
        id,
        health: health + 1,
        ready: health + 1 === 10
      };

    default:
      return state;
  }
};
