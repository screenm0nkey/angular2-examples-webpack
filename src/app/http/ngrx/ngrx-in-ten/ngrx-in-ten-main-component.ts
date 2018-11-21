import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {combineLatest, map} from "rxjs/operators";
import {Observable} from 'rxjs';

interface PersonAction {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

@Component({
  selector: "ngrx-in-ten",
  template: `
  <p class="path">src/app/http-rxjs/ngrx/ngrx-in-ten/ngrx-in-ten-main-component.ts</p>
      <h4>NgRx in Ten - Party Planner</h4>
      <a href="https://egghead.io/lessons/angular-2-ngrx-store-in-10-minutes" target="_blank">NgRx in Ten Minutes Egghead</a>
      
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

  constructor(private store: Store<any>) {
    this.peoples$ = store
      .select("peopleReducer")
      .pipe(combineLatest(store.select("filterReducer")))
      .pipe(map(this.filterFn));

    this.peoples$.subscribe(people => console.log(people));
  }

  filterFn(value: [any, any]): PersonAction[] {
    const people = value[0];
    const filter: (person: any) => any = value[1];
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

  addGuest({id}) {
    this.store.dispatch({type: "ADD_GUESTS", payload: id});
  }

  removeGuest({id}) {
    this.store.dispatch({type: "REMOVE_GUESTS", payload: id});
  }

  removePerson({id}) {
    this.store.dispatch({type: "REMOVE_PERSON", payload: id});
  }

  toggleAttending({id}) {
    this.store.dispatch({type: "TOGGLE_ATTENDING", payload: id});
  }

  updateFilter(filter) {
    this.store.dispatch({type: filter});
  }
}
