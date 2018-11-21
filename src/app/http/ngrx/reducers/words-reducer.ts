import {Action} from '@ngrx/store';

const stringOfWords = `Bacon ipsum dolor amet beef pork hamburger landjaeger rump`;
const words = stringOfWords.split(' ');

export const wordsReducer = (state = words[0], action: Action) => {
  switch (action.type) {
    case 'random':
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    default:
      return state;
  }
};
