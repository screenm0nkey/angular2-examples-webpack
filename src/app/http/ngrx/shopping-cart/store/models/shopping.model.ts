import { ShoppingState } from '../reducers/shopping.reducer';

export interface AppState {
  readonly shopping: ShoppingState
}

export interface ShoppingItem {
  id?: string;
  name: string;
}
