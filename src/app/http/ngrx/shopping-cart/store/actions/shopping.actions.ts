
import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping.model';


export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure'
}

export const loadShoppingAction = createAction(ShoppingActionTypes.LOAD_SHOPPING, props<{ payload: ShoppingItem[] }>());
export const loadShoppingSuccessAction = createAction(ShoppingActionTypes.LOAD_SHOPPING_SUCCESS, props<{ payload: ShoppingItem[] }>());
export const loadShoppingFailureAction = createAction(ShoppingActionTypes.LOAD_SHOPPING_FAILURE, props<{ payload: Error }>());

export const addItemAction = createAction(ShoppingActionTypes.ADD_ITEM, props<{ payload: ShoppingItem }>());
export const addItemSuccessAction = createAction(ShoppingActionTypes.ADD_ITEM_SUCCESS, props<{ payload: ShoppingItem }>());
export const addItemFailureAction = createAction(ShoppingActionTypes.ADD_ITEM_FAILURE, props<{ payload: Error }>());

export const deleteItemAction = createAction(ShoppingActionTypes.DELETE_ITEM, props<{ payload: string }>());
export const deleteItemSuccessAction = createAction(ShoppingActionTypes.DELETE_ITEM_SUCCESS, props<{ payload: string }>());
export const deleteItemFailureAction = createAction(ShoppingActionTypes.DELETE_ITEM_FAILURE, props<{ payload: Error }>());


export class LoadShoppingAction implements Action {
  type: string;
  constructor(public payload: ShoppingItem[] | Error) { }
}

export class AddShoppingAction implements Action {
  type: string;
  constructor(public payload: ShoppingItem | Error) { }
}

export class DeleteShoppingAction implements Action {
  type: string;
  constructor(public payload: string | Error) { }
}