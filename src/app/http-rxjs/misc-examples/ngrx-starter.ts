import {Component} from '@angular/core';
import {ActionReducer, Action} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';


const stringOfWords = `Bacon ipsum dolor amet beef pork hamburger landjaeger rump frankfurter ham venison ground round alcatra doner capicola kielbasa ham hock brisket. Pork chop cow shankle capicola turkey brisket chicken pig leberkas pork loin strip steak ground round. Chicken spare ribs meatloaf turkey venison kevin biltong filet mignon pork belly. Porchetta jowl prosciutto venison kielbasa turkey. Ham hock tongue salami pork belly spare ribs chicken filet mignon ground round flank shoulder drumstick short ribs strip steak.`;
const words = stringOfWords.split(" ");

export const word: ActionReducer<string> = (state = words[0], action: Action) => {
  switch (action.type) {
    case 'random':
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    default:
      return state;
  }
};

@Component({
  selector: 'ngrx-stater-app',
  template: `
    <h4>Basic NgRx example</h4>
    <a href="http://plnkr.co/edit/avLMS3m0VNMXSfUhT7K9?p=preview" target="_blank">Orinial Plunk</a>
    <h1>{{word$ | async}}</h1>
  `
})
export class NgRxStarterApp {
  word$;

  constructor(public store: Store<any>) {
    this.word$ = store.select('word');
    Observable.interval(1000)
      .mapTo('random')
      .subscribe(type => store.dispatch({type}));
  }
}
