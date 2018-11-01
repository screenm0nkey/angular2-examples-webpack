/* tslint:disable:typedef */
import {combineReducers, Reducer} from 'redux';
import {UsersReducer, UsersState} from './UsersReducer';
import {ThreadsReducer, ThreadsState} from './ThreadsReducer';

export * from './UsersReducer';
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
