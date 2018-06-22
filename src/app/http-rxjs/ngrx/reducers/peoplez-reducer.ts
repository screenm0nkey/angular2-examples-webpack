import { clock, MyAction} from "./clock-reducer";
import {ADVANCE, HOUR, RECALL} from "../actions";

const defaultAction = {type: '', payload: ''};
const defaultPeople = [
  {name: "Sara", time: clock(undefined, defaultAction)},
  {name: "John", time: clock(undefined, defaultAction)},
  {name: "Nancy", time: clock(undefined, defaultAction)},
  {name: "Drew", time: clock(undefined, defaultAction)}
];

export const peoplez = (state = defaultPeople, action: MyAction) => {
  const {type, payload} = action;
  switch (type) {
    case ADVANCE:
      return state.map(person => {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, {type: HOUR, payload: 5})
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
