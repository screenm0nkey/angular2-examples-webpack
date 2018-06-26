import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/mapTo";


@Component({
  selector: "ngrx-stater-app",
  template: `
    <p class="path">/http-rxjs/misc-examples/ngrx-starter.ts</p>
    <h4>Basic NgRx example</h4>
    
    <a href="http://plnkr.co/edit/avLMS3m0VNMXSfUhT7K9?p=preview" target="_blank">Orinial Plunk</a>
    <p style="color: red; margin-bottom: 10px">{{word$ | async}}</p>
  `
})
export class NgRxStarterApp {
  word$;

  constructor(public store: Store<any>) {
    this.word$ = store.select("wordsReducer");

    Observable.interval(1000)
      .mapTo("random")
      .subscribe(type => store.dispatch({type}));
  }
}
