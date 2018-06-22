import {MyAction} from "./clock-reducer";

export const filter = (state = person => person, action: MyAction) => {
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
