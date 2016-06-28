import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Store, provideStore} from '@ngrx/store';
import {Subject} from 'rxjs/Subject';

const SECOND = 'SECOND';
const DAY = 'DAY';
const HOUR = 'HOUR';

const tick = (state:Date = new Date(), {type, payload})=> {
    let d:Date;
    console.log(state, type, payload);
    switch (type) {
        case DAY:
            d = new Date(state.getTime());
            d.setDate(d.getDate() + payload);
            return d;
        case HOUR:
            d = new Date(state.getTime());
            d.setHours(d.getHours() + payload);
            return d;
        case SECOND:
            d = new Date(state.getTime());
            d.setSeconds(d.getSeconds() + payload);
            return d;

        default:
            return state;
    }
};

@Component({
    selector: 'clock-one',
    providers : [provideStore({tick})], // this should go really go in the bootstrap
    template: `
        <h4>Taken from a John Linquist Plunk</h4>
        <button (click)="hourBackward$.next()">Hour -1</button>
        <button (click)="hourForward$.next()">Hour +1</button>
        <div></div>
        <button (click)="dayBackward$.next()">Day -1</button>
        <button (click)="dayForward$.next()">Day +1</button>
        <div></div>
    {{clock$ | async | date:'yyyy MMMM EEE d hh:mm:ss'}}    
`
})
export class NgRxClockApp {
    clock$;
    hourBackward$ = new Subject().mapTo({type:HOUR, payload:-1});
    hourForward$ = new Subject().mapTo({type:HOUR, payload:1});
    dayBackward$ = new Subject().mapTo({type:DAY, payload:-1});
    dayForward$ = new Subject().mapTo({type:DAY, payload:1});

    constructor(private store:Store<any>){
        // the ngrx store is a BehaviorSubject so it's an Observer as well as an Observable
        Observable.merge(
            this.hourBackward$,
            this.hourForward$,
            this.dayBackward$,
            this.dayForward$,
            Observable.interval(1000).mapTo({type: SECOND, payload: 1})
        ).subscribe(store);

        this.clock$ = store.select('tick');
    }
}




