import { createReducer, on } from '@ngrx/store';
import { HOUR, Peepz, peopleAdvanceAction, peopleRecallAction, peopleSecondAction } from "../actions";
import { clockReducer } from "./clock-reducer";
import { MyAction } from "./_reducers.service";



const defaultAction = { type: '', payload: '' };
const defaultPeopleState: Peepz[] = [
  { name: "Sara", time: clockReducer(undefined, defaultAction) },
  { name: "John", time: clockReducer(undefined, defaultAction) },
  { name: "Nancy", time: clockReducer(undefined, defaultAction) },
  { name: "Drew", time: clockReducer(undefined, defaultAction) }
];

const featureReducer = createReducer(
  defaultPeopleState,
  on(peopleSecondAction, (state, action) => {
    return state.map(person => {
      return {
        name: person.name,
        time: clockReducer(person.time, action)
      };
    })
  }),
  on(peopleAdvanceAction, (state, { payload }) => {
    return state.map(person => {
      if (payload === person) {
        return {
          name: person.name,
          time: clockReducer(person.time, { type: HOUR, payload: 1 })
        };
      }
      return person;
    });
  }),
  on(peopleRecallAction, (state, { payload }) => {
    return state.map(person => {
      return {
        name: person.name,
        time: payload
      };
    });
  })
);

export function peoplezReducer(state: Peepz[] | undefined, action: MyAction) {
  return featureReducer(state, action);
}

