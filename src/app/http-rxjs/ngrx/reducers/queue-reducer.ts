import {ADD, GROW} from "../actions";
import {MyAction} from "./clock-reducer";
import {unit} from "./unit-reducer";

export const queue = (state = [], action: MyAction) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case GROW:
      return state.map(u => {
        if (u.id === action.payload) {
          return unit(u, {type: action.type, payload: action.payload});
        }
        return u;
      });

    default:
      return state;
  }
};
