import { createAction, props } from '@ngrx/store';
import { Unit } from '../reducers/_reducers.service';

export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const GROW_QUEUE = 'GROW_QUEUE';

export const addToQueueAction = createAction(ADD_TO_QUEUE, props<{ payload: Unit[] }>());
export const growQueueAction = createAction(GROW_QUEUE, props<{ payload: number }>());