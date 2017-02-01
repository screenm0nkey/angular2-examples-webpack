import {ActionReducer, Action} from "@ngrx/store";
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';
export const DAY = 'DAY';

const defaultAction: Action = {type: '', payload: ''}

export const clock: ActionReducer<any> = (state: Date = new Date(), action: Action = defaultAction) => {
  const date = new Date(state.getTime());
  switch (action.type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + parseInt(action.payload));
      return date;
    case HOUR:
      date.setHours(date.getHours() + parseInt(action.payload));
      return date;
    default:
      return state;
  }
};


const defaultPeople = [
  {name: "Sara", time: clock(undefined, defaultAction)},
  {name: "John", time: clock(undefined, defaultAction)},
  {name: "Nancy", time: clock(undefined, defaultAction)},
  {name: "Drew", time: clock(undefined, defaultAction)},
];
export const peoplez = (state = defaultPeople, {type, payload}) => {
  switch (type) {
    case ADVANCE:
      return state.map((person) => {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, {type: HOUR, payload: 5})
          }
        }
        return person;
      });
    case RECALL:
      return state.map((person) => {
        return {
          name: person.name,
          time: payload
        }
      });
    default:
      return state;
  }
};


export const tick: ActionReducer<any> = (state: Date = new Date(), action: Action) => {
  let d: Date;
  switch (action.type) {
    case DAY:
      d = new Date(state.getTime());
      d.setDate(d.getDate() + action.payload);
      return d;
    case HOUR:
      d = new Date(state.getTime());
      d.setHours(d.getHours() + action.payload);
      return d;
    case SECOND:
      d = new Date(state.getTime());
      d.setSeconds(d.getSeconds() + action.payload);
      return d;
    default:
      return state;
  }
};
