import {ADD_TO_QUEUE, GROW_QUEUE, GROW_UNIT} from "../actions";
import {unitReducer} from "./unit-reducer";
import {NumberAction, Unit} from "./_reducers.service";

export const queueReducer = (state: Unit[] = [], action: NumberAction) => {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return [...state, action.payload];

    case GROW_QUEUE:
      return state.map(u => {
        if (u.id === action.payload) {
          return unitReducer(u, {type: GROW_UNIT, payload: action.payload});
        }
        return u;
      });

    default:
      return state;
  }
};
