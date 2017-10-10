import {Action, ActionReducer} from "@ngrx/store";

export const filter: ActionReducer<any> = (state = person => person, action: Action) => {
  switch (action.type) {
    case "SHOW_ATTENDING":
      return person => person.attending;
    case "SHOW_ALL":
      return person => person;
    case "SHOW_WITH_GUESTS":
      return person => person.guests;
    default:
      return state;
  }
};

// Action only has payload and type properties
interface NickAction extends Action {
  id: number;
}

export const people: ActionReducer<any> = (state = [], action: NickAction) => {
  switch (action.type) {
    case "ADD_PERSON":
      action.id = Math.round(Math.random() * 100000);
      return [
        ...state,
        action.payload
      ];
    case "REMOVE_PERSON":
      return state.filter(person => person.id !== action.payload);
    case "ADD_GUESTS":
      return state.map(person => {
        if (person.id === action.payload) {
          return Object.assign({}, person, {
            guests: person.guests + 1
          })
        }
        return person;
      });
    case "REMOVE_GUESTS":
      return state.map(person => {
        if (person.id === action.payload) {
          return Object.assign({}, person, {
            guests: person.guests - 1
          })
        }
        return person;
      });
    case "TOGGLE_ATTENDING":
      return state.map(person => {
        if (person.id === action.payload) {
          return Object.assign({}, person, {
            attending: !person.attending
          })
        }
        return person;
      });

    default:
      return state;
  }
}
