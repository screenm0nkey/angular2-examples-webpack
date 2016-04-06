import {Component} from 'angular2/core';
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
            d = new Date(state.toDateString());
            d.setDate(d.getDate() + payload);
            return d;
        case HOUR:
            d = new Date(state.toDateString());
            d.setHours(d.getHours() + payload);
            return d;

        case SECOND:
            d = new Date(state.toDateString());
            d.setSeconds(d.getSeconds() + payload);
            return d;

        default:
            return state;
    }
};

@Component({
    selector: 'app',
    providers : [provideStore({tick})], // this should go really go in the bootstrap
    template: `
        <button (click)="hourBackward$.next()">Hour -1</button>
        <button (click)="hourForward$.next()">Hour +1</button>
        <div></div>
        <button (click)="dayBackward$.next()">Day -1</button>
        <button (click)="dayForward$.next()">Day +1</button>
        <div></div>
    {{clock | async | date:'yMMMMEEEEdjms'}}    
`
})
export class NgRxClockApp {
    clock;
    hourBackward$ = new Subject().mapTo({type:HOUR, payload:-1});
    hourForward$ = new Subject().mapTo({type:HOUR, payload:1});
    dayBackward$ = new Subject().mapTo({type:DAY, payload:-1});
    dayForward$ = new Subject().mapTo({type:DAY, payload:1});

    constructor(private store:Store<any>){
        Observable.merge(
            this.hourBackward$,
            this.hourForward$,
            this.dayBackward$,
            this.dayForward$,
            Observable
                .interval(1000)
                .mapTo({type: SECOND, payload: 1})
        ).subscribe(store);

        this.clock = store.select('tick');
    }
}




