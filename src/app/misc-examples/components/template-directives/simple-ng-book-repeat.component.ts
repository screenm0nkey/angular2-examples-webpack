import { Component } from "@angular/core";
import { Person } from './simple-ng-book-repeat.directive';

/**
 * NgBookRepeatDirective
 */
@Component({
  selector: "ng-book-repeat-template",
  template: `
    <p class="file">
      misc-examples/components/template-directives/simple-ng-book-repeat.component.ts
    </p>
    <h4>Custom *ngBookRepeat template using IterableDiffer</h4>
    <div class="links">
      <a routerLink="/lifecycle">ngDoCheck and IterableDiffers, KeyValueDiffers</a>
      <a routerLink="../directives">Assign a structural directive dynamic content</a>
      <dlink [id]="56"></dlink>
    </div>

    <p>
      In the template that is generated, we’re going to have a local view variable called
      <highlight>#peep</highlight>, which will receive the value from the
      <highlight>$implicit local variable</highlight>.
      <highlight>$implicit</highlight> is the name of the local variable that
      Angular uses when “de-sugaring” the syntax into a template.
    </p>

    <code><lgt>li *ngBookRepeat="let peep of people"</lgt></code>
    gets converted to
    <code><lgt>template ngBookRepeat [ngBookRepeatOf]="people" let-peep="$implicit"</lgt><lgt>/template</lgt></code>

    Here in the code is where we set the <highlight>$implicit</highlight> value to the change.item<br />
    <highlight>change.item will be equal to the value of peep</highlight>

    <code>let view = this.viewContainer.createEmbeddedView(this.template,<cur>'$implicit': change.item</cur>);</code>

    <ul>
      <li *ngBookRepeat="let peep of people">
        {{ peep.name }} is {{ peep.age }}
        <span (click)="remove(p)" style="text-decoration: underline; cursor:pointer">[Remove]</span>
      </li>
    </ul>

    <form class="ui form" style="width:150px;">
      <input type="text" #name placeholder="Name" />
      <input type="text" #age placeholder="Age" style="float: left" />
      <button class="ui submit button" (click)="add(name, age)">Add</button>
    </form>
  `
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
