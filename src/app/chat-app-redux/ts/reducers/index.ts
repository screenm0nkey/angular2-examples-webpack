
 /* tslint:disable:typedef */

import {
  Reducer,
  combineReducers 
} from 'redux';
import {
  UsersState,
  UsersReducer
} from './UsersReducer.ts';
export * from './UsersReducer.ts';
import {
  ThreadsState,
  ThreadsReducer
} from './ThreadsReducer.ts';
export * from './ThreadsReducer.ts';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});

export default rootReducer;

