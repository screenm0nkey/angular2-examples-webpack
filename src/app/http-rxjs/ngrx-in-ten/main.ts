import {Component} from '@angular/core';
import {PersonList} from './components/person-list';
import {PersonInput} from './components/person-input';
import {FilterSelect} from './components/filter-select';
import {Store, provideStore} from '@ngrx/store';
import {people, filter} from "./reducers";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app',
    providers : [provideStore({people, filter})],
    template: `
      <h4>Party Planner</h4>
      <a href="https://egghead.io/lessons/angular-2-ngrx-store-in-10-minutes" target="_blank">NgRx in Ten Minutes Egghead</a>
      <filter-select (updateFilter)="updateFilter($event)"></filter-select>
      <person-input (addPerson)="addPerson($event)"></person-input>
      <person-list
        [people]="people$ | async"
        (addGuest)="addGuest($event)"
        (removeGuest)="removeGuest($event)"
        (removePerson)="removePerson($event)"
        (toggleAttending)="toggleAttending($event)">
      </person-list>
    `,
    directives: [PersonList, PersonInput, FilterSelect]
})
export class NgRxInTenMinsComponent {
    public people$ :Observable<any>;
    private id = 0;

    constructor(private _store:Store<any>) {
        this.people$ = Observable.combineLatest(
            _store.select('people'),
            _store.select('filter'),
            (people:any[], filter) => {
                return people.filter(filter);
            }
        );
        this.people$.subscribe((people)=>console.log(people))
    }

    addPerson(name) {
        this._store.dispatch({
            type: "ADD_PERSON", payload: {
                name,
                guests: 0,
                attending: false
            }
        })
    }

    addGuest({id}) {
        this._store.dispatch({type: "ADD_GUESTS", payload: id});
    }

    removeGuest({id}) {
        this._store.dispatch({type: "REMOVE_GUESTS", payload: id});
    }

    removePerson({id}) {
        this._store.dispatch({type: "REMOVE_PERSON", payload: id});
    }


    toggleAttending({id}) {
        this._store.dispatch({type: "TOGGLE_ATTENDING", payload: id});
    }

    updateFilter(filter) {
        this._store.dispatch({type: filter});
    }
}
