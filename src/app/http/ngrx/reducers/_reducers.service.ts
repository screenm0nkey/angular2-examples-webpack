import {Action} from "@ngrx/store";

export class MyAction implements Action {
  id ?: number;
  payload ?: any;
  type: string;
}

export class NumberAction extends MyAction {
  payload : number;
}

export {filterReducer} from "./filter-reducer";
export {peopleReducer} from "./people-reducer";
export {peoplezReducer} from "./peoplez-reducer";
export {queueReducer} from "./queue-reducer";
export {tickReducer} from "./tick-reducer";
export {unitReducer} from "./unit-reducer";
export {clockReducer} from "./clock-reducer";
export {wordsReducer} from "./words-reducer";

