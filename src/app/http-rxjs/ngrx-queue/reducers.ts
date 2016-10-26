import {ActionReducer, Action} from '@ngrx/store';
import {ADD, GROW} from './actions';

export const unit : ActionReducer<any> = (state, action : Action)=> {
  switch (action.type) {
    case GROW:
      const {health, id} = state;
      return {
        id,
        health: health + 1,
        ready:(health + 1 === 10)
      };

    default:
      return state;
  }
};

export const queue: ActionReducer<any> = (state = [], action : Action)=> {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case GROW:
      return state.map(u => {
        if (u.id === action.payload) {
          return unit(u, {type : action.type, payload : action.payload});
        }
        return u;
      });

    default:
      return state
  }
};
