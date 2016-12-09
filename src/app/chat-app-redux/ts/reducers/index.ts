/* tslint:disable:typedef */

import {Reducer, combineReducers} from 'redux';
import {UsersState, UsersReducer} from './UsersReducer';
export * from './UsersReducer';
import {ThreadsState, ThreadsReducer} from './ThreadsReducer';
export * from './ThreadsReducer';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default rootReducer;

