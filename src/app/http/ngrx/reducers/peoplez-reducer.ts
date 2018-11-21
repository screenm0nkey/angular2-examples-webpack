import {clockReducer, MyAction} from "./clock-reducer";
import {ADVANCE, HOUR, RECALL} from "../actions";

const defaultAction = {type: '', payload: ''};
const defaultPeople = [
  {name: "Sara", time: clockReducer(undefined, defaultAction)},
  {name: "John", time: clockReducer(undefined, defaultAction)},
  {name: "Nancy", time: clockReducer(undefined, defaultAction)},
  {name: "Drew", time: clockReducer(undefined, defaultAction)}
];

export const peoplezReducer = (state = defaultPeople, action: MyAction) => {
  const {type, payload} = action;
  switch (type) {
    case ADVANCE:
      return state.map(person => {
        if (payload === person) {
          return {
            name: person.name,
            time: clockReducer(person.time, {type: HOUR, payload: 1})
          };
        }
        return person;
      });
    case RECALL:
      return state.map(person => {
        return {
          name: person.name,
          time: payload
        };
      });
    default:
      return state;
  }
};
