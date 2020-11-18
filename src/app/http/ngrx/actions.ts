import { createAction, props } from '@ngrx/store';

export const ADD = "ADD";
export const GROW_UNIT = "GROW_UNIT";
export const HOUR = "HOUR";

export interface Peepz {
    name: string;
    time: Date;
}

export const dayTickAction = createAction('DAY_TICK', props<{ payload: number }>());
export const hourTickAction = createAction('HOUR_TICK', props<{ payload: number }>());
export const secondTickAction = createAction('SECOND_TICK', props<{ payload: number }>());


export const peopleSecondAction = createAction('SECOND', props<{ payload: number }>());
export const peopleAdvanceAction = createAction('ADVANCE', props<{ payload: Peepz }>());
export const peopleRecallAction = createAction('RECALL', props<{ payload: Date }>());

export const clockSecondAction = createAction('SECOND', props<{ payload: string }>());
export const clockHourAction = createAction('HOUR', props<{ payload: string }>());