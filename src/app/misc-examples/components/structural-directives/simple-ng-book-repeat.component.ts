import { Component } from "@angular/core";
import { Person } from './simple-ng-book-repeat.directive';

/**
 * NgBookRepeatDirective
 */
@Component({
  selector: "ng-book-repeat-template",
  templateUrl:'./simple-ng-book-repeat.component.html',
})
export class NgBookRepeatComponent {
  people: Person[];

  constructor() {
    this.people = [
      { name: "Joe", age: 10 },
      { name: "Patrick", age: 21 },
      { name: "Melissa", age: 12 },
      { name: "Kate", age: 19 }
    ];
  }

  remove(person: Person) {
    let index: number = this.people.indexOf(person);
    this.people.splice(index, 1);
    return false;
  }

  add(name: HTMLInputElement, age: HTMLInputElement) {
    if (name.value && age.value) {
      this.people.push({ name: name.value, age: Number(age.value) });
      name.value = "";
      age.value = "";
    }
  }
}
