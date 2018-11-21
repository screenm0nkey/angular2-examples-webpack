import {GROW_UNIT} from "../actions";
import {Unit} from "../ngrx-queue/ngrx-queue.component";
import {NumberAction} from "./_reducers.service";

export const unitReducer = (state: Unit, action: NumberAction) => {
  if (!state) {
    return state;
  }
  switch (action.type) {
    case GROW_UNIT:
      if (!state.completed) {
        const {health, id} = state;
        return {
          id,
          health: health + 1,
          completed: health + 1 >= 10
        };
      }

    default:
      return state;
  }
};
