import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'counter-component',
    styles : [require('./main.css')],
    template: `
        <h4>Reactive data flow</h4>
        <pre><a target="_blank" href="http://blog.lambda-it.ch/reactive-data-flow-in-angular-2">reactive-data-flow-in-angular-2</a></pre>
        <div>
            <button (click)="decrement()">Decrement</button>
            <button (click)="increment()">Increment</button>
            <p> Counter: {{ count | async }} </p>
        </div><hr>`
})
export class CounterComponent {
    decrement : () => void;
    increment : () => void;
    count : Observable<number>;

    constructor() {
        // convert event listeners into observables
        const decrementCounter$ = Observable.create(observer => {
            this.decrement = () => { observer.next(); };
        });
        const incrementCounter$ = Observable.create(observer => {
            this.increment = () => { observer.next(); };
        });

        // set up the intent
        const intent$ = Observable.merge(
            decrementCounter$.map(() => -1),
            incrementCounter$.map(() => +1)
        );

        // declare how the intent is transformed into a model
        this.count = intent$
            .startWith(0)
            .scan((currentCount:number, value:number) => currentCount + value);

        // the observable model is bound to the user interface in the template.
        // observables are understood via the async pipe
    }
}

