import { Action } from "@ngrx/store";

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
  id?: number;
  type: string;

  constructor(public payload: any) { }
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

export interface MyNgRxStores {
  wordsReducer: string;
  tickReducer: Date;
  clockReducer: Date;
  filterReducer: PersonAction[];
  peopleReducer: PersonAction[];
  peoplezReducer: PersonAction;
  queueReducer: Unit[];
  unitReducer: Unit;
}

export { peoplezReducer } from "./peoplez-reducer";
export { queueReducer } from "../ngrx-queue/reducers";
export { tickReducer } from "./tick-reducer";
export { unitReducer } from "./unit-reducer";
export { clockReducer } from "./clock-reducer";
export { wordsReducer } from "./words-reducer";

