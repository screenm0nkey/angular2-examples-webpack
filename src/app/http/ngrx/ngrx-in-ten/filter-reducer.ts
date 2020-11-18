import { MyAction } from "../reducers/_reducers.service";

export const filterReducer = (state = person => person, action: MyAction) => {
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
