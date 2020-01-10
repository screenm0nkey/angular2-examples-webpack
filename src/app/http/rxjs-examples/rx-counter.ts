import {Component} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

@Component({
  selector: 'counter-component',
  template: `
        <p class='path'>/http-rxjs/misc-examples/rx-counter.ts</p>
        <h4>RXJS Reactive data flow</h4>
        <dlink [id]="23"></dlink>
        <br>
        <div style='margin-bottom: 10px'>
            <button (click)='decrement()'>Decrement</button>
            <button (click)='increment()'>Increment</button>
            <p> Counter: {{ count | async }} </p>
        </div>`
})
export class CounterComponent {
  decrement: () => void;
  increment: () => void;
  count: Observable<{}>;

  constructor() {
    // convert event listeners into observables
    const decrementCounter$: Observable<number> = Observable.create(observer => {
      this.decrement = () => observer.next();
    });
    const incrementCounter$: Observable<number> = Observable.create(observer => {
      this.increment = () => observer.next();
    });

    // set up the intent
    const intent$ = merge(
      decrementCounter$.pipe(map(() => -1)),
      incrementCounter$.pipe(map(() => +1))
    );

    // declare how the intent is transformed into a model
    this.count = intent$
      .pipe(startWith(0))
      .pipe(scan((currentCount: number, value: number) => currentCount + value));
  }
}
