import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Observable, combineLatest } from 'rxjs';
import { MyNgRxStores, PersonAction } from "../reducers/_reducers.service";

@Component({
  selector: "ngrx-in-ten",
  template: `
    <p class="path">http-rxjs/ngrx/ngrx-in-ten/ngrx-in-ten-main-component.ts</p>
    <h4>NgRx in Ten - Party Planner</h4>
    <dlink [id]="33"></dlink>
    
    <filter-select (updateFilter)="updateFilter($event)"></filter-select>

    <person-input (addPerson)="addPerson($event)"></person-input>
    
    <person-list
      [people]="peoples$ | async"
      (addGuest)="addGuest($event)"
      (removeGuest)="removeGuest($event)"
      (removePerson)="removePerson($event)"
      (toggleAttending)="toggleAttending($event)">
    </person-list>
  `
})
export class NgrxInTenMainComponent {
  public peoples$: Observable<PersonAction[]>;

  constructor(public store: Store<MyNgRxStores>) {
    this.peoples$ = combineLatest([store.select("filterReducer"), store.select("peopleReducer")])
      .pipe(map(this.filterFn));

    this.peoples$.subscribe(people => console.log(people));
  }

  filterFn(value: [any, any]): PersonAction[] {
    const people = value[1];
    const filter: (person: any) => any = value[0];
    if (people && filter) {
      return people.filter(filter);
    }
  }

  addPerson(name: string): void {
    this.store.dispatch({
      type: "ADD_PERSON",
      payload: {
        name,
        guests: 0,
        attending: false
      }
    });
  }

  addGuest({ id }) {
    this.store.dispatch({ type: "ADD_GUESTS", payload: id });
  }

  removeGuest({ id }) {
    this.store.dispatch({ type: "REMOVE_GUESTS", payload: id });
  }

  removePerson({ id }) {
    this.store.dispatch({ type: "REMOVE_PERSON", payload: id });
  }

  toggleAttending({ id }) {
    this.store.dispatch({ type: "TOGGLE_ATTENDING", payload: id });
  }

  updateFilter(filter) {
    this.store.dispatch({ type: filter });
  }
}
