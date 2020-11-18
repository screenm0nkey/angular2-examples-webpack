import { createReducer, on } from '@ngrx/store';
import { addItemAction, addItemFailureAction, addItemSuccessAction, AddShoppingAction, deleteItemAction, deleteItemFailureAction, deleteItemSuccessAction, DeleteShoppingAction, LoadShoppingAction, loadShoppingAction, loadShoppingFailureAction, loadShoppingSuccessAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping.model';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [{
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    name: 'Diet Coke',
  }],
  loading: false,
  error: undefined
};

const featureReducer = createReducer(
  initialState,
  on(loadShoppingAction, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadShoppingSuccessAction, (state, { payload }) => {
    return {
      ...state,
      list: payload,
      loading: false
    }

  }),
  on(loadShoppingFailureAction, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false
    }

  }),
  on(addItemAction, (state, { payload }) => {
    return {
      ...state,
      list: [...state.list, payload],
      loading: false
    }
  }),
  on(addItemSuccessAction, (state, { payload }) => {
    return {
      ...state,
      list: [...state.list, payload],
      loading: false
    };
  }),
  on(addItemFailureAction, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false
    };
  }),
  on(deleteItemAction, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(deleteItemSuccessAction, (state, { payload }) => {
    return {
      ...state,
      list: state.list.filter(item => item.id !== payload),
      loading: false
    }
  }),
  on(deleteItemFailureAction, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false
    };
  })
)

export function ShoppingReducer(state: ShoppingState = initialState, action: LoadShoppingAction | AddShoppingAction | DeleteShoppingAction) {
  return featureReducer(state, action)
}
