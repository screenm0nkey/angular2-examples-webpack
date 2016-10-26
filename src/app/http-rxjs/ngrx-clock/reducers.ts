import {ActionReducer, Action} from '@ngrx/store';
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';
export const RECALL = 'RECALL';

const defaultAction: Action = {type: '', payload: ''}

export const clock: ActionReducer<any> = (state: Date = new Date(), action: Action = defaultAction)=> {
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
export const people = (state = defaultPeople, {type, payload})=> {
  switch (type) {
    case ADVANCE:
      return state.map((person)=> {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, {type: HOUR, payload: 5})
          }
        }
        return person;
      });
    case RECALL:
      return state.map((person)=> {
        return {
          name: person.name,
          time: payload
        }
      });
    default:
      return state;
  }
};
