import {
  Component,
  Directive,
  DoCheck,
  ViewRef,
  TemplateRef,
  ViewContainerRef,
  IterableDifferFactory,
  IterableDiffer,
  IterableDiffers,
  IterableChanges,
  IterableChangeRecord,
} from "@angular/core";

interface Person {
  name: string;
  age: number;
}

/**
 * NgBookRepeatDirective
 */
@Directive({
  selector: "[ngBookRepeat]",
  inputs: ["ngBookRepeatOf"]
})
export class NgBookRepeatDirective implements DoCheck {
  // items holds the collection we’re iterating on
  private items: Person[];
  // differ is used for change detection purposes
  private differ: IterableDiffer<Person>;
  //views is a Map that will link a given item on the collection with the view that contains it
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private differs: IterableDiffers) {
  }

  // this will trigger when we set the ngBookRepeatOf input:
  set ngBookRepeatOf(items) {
    this.items = items;
    if (this.items && !this.differ) {
      const idf: IterableDifferFactory = this.differs.find(items);
      this.differ = idf.create();
    }
  }

  // on every system event i.e. click, timeout etc ngDoCheck is called and the component is checked, which is quite a lot
  ngDoCheck(): void {
    if (this.differ) {
      const changes: IterableChanges<Person> = this.differ.diff(this.items);
      if (changes) {
        this.addNewItems(changes);
        this.removeDeletedItems(changes);
      }
    }
  }

  addNewItems(changes: IterableChanges<Person>) {
    changes.forEachAddedItem((change: IterableChangeRecord<Person>) => {
      let view = this.viewContainer.createEmbeddedView(this.template, {
        $implicit: change.item
      });
      this.views.set(change.item, view);
    });
  }

  removeDeletedItems(changes: IterableChanges<Person>) {
    changes.forEachRemovedItem((change: IterableChangeRecord<Person>) => {
      let view: ViewRef = this.views.get(change.item);
      let index: number = this.viewContainer.indexOf(view);
      this.viewContainer.remove(index);
      this.views.delete(change.item);
    });
  }
}


/**
 * NgBookRepeatDirective
 */
@Component({
  selector: "ng-book-repeat-template",
  template: require("./simple-ng-book-repeat.component.html")
})
export class NgBookRepeatComponent {
  people: Person[];

  constructor() {
    this.people = [
      {name: "Joe", age: 10},
      {name: "Patrick", age: 21},
      {name: "Melissa", age: 12},
      {name: "Kate", age: 19}
    ];
  }

  remove(person: Person) {
    let idx: number = this.people.indexOf(person);
    this.people.splice(idx, 1);
    return false;
  }

  add(name: HTMLInputElement, age: HTMLInputElement) {
    if (name.value && age.value) {
      this.people.push({name: name.value, age: Number(age.value)});
      name.value = "";
      age.value = "";
    }
  }
}
