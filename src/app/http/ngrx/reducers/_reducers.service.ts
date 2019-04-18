import {Action} from "@ngrx/store";
import {clockReducer} from "./clock-reducer";
import {filterReducer} from "./filter-reducer";
import {peopleReducer} from "./people-reducer";
import {peoplezReducer} from "./peoplez-reducer";
import {queueReducer} from "./queue-reducer";
import {tickReducer} from "./tick-reducer";
import {unitReducer} from "./unit-reducer";
import {wordsReducer} from "./words-reducer";

export interface Unit {
  id: number;
  health: number;
  completed: boolean;
}

export interface AddUnitAction {
  type: string;
  payload: Unit
}


export class MyAction implements Action {
  id ?: number;
  payload ?: any;
  type: string;
}

export interface PersonAction {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

export class NumberAction extends MyAction {
  payload: number;
}

export interface MyNgRxStore {
  wordsReducer: string;
  tickReducer:Date;
  clockReducer:Date;
  filterReducer : PersonAction[];
  peopleReducer : PersonAction[];
  peoplezReducer : PersonAction;
  queueReducer : Unit[];
  unitReducer : Unit;
}

export {filterReducer} from "./filter-reducer";
export {peopleReducer} from "./people-reducer";
export {peoplezReducer} from "./peoplez-reducer";
export {queueReducer} from "./queue-reducer";
export {tickReducer} from "./tick-reducer";
export {unitReducer} from "./unit-reducer";
export {clockReducer} from "./clock-reducer";
export {wordsReducer} from "./words-reducer";

