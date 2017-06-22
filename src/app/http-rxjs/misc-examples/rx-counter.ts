import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'counter-component',
  template: `
        <p class="file">src/app/http-rxjs/misc-examples/rx-counter.ts</p>
        <h4>RXJS Reactive data flow</h4>
        <a target="_blank" href="http://blog.lambda-it.ch/reactive-data-flow-in-angular-2">
          reactive-data-flow-in-angular-2
        </a>
        <br>
        <div style="margin-bottom: 10px">
            <button (click)="decrement()">Decrement</button>
            <button (click)="increment()">Increment</button>
            <p> Counter: {{ count | async }} </p>
        </div>`
})
export class CounterComponent {
  decrement: () => void;
  increment: () => void;
  count: Observable<{}>;

  constructor() {
    // convert event listeners into observables
    const decrementCounter$ = Observable.create(observer => {
      this.decrement = () => observer.next();
    });
    const incrementCounter$ = Observable.create(observer => {
      this.increment = () => observer.next();
    });

    // set up the intent
    const intent$ = Observable.merge(
      decrementCounter$.map(() => -1),
      incrementCounter$.map(() => +1)
    );

    // declare how the intent is transformed into a model
    this.count = intent$
      .startWith(0)
      .scan((currentCount: number, value: number) => currentCount + value);
  }
}

