import {
  Directive,
  DoCheck,
  IterableChangeRecord,
  IterableChanges,
  IterableDiffer,
  IterableDifferFactory,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from "@angular/core";

export interface Person {
  name: string;
  age: number;
}

@Directive({
  selector: "[ngBookRepeat]",
  inputs: ["ngBookRepeatOf"]
})
export class NgBookRepeatDirective implements DoCheck {
  // items holds the collection we’re iterating on
  public items: Person[];
  // differ is used for change detection purposes
  public differ: IterableDiffer<Person>;
  // views is a Map that will link a given item on the collection with the view that contains it
  public views: Map<any, ViewRef> = new Map<any, ViewRef>();

  constructor(
    public viewContainer: ViewContainerRef,
    public template: TemplateRef<any>,
    public differs: IterableDiffers
  ) {}

  // this will trigger when we set the ngBookRepeatOf input,
  // at which point we
  set ngBookRepeatOf(items: Person[]) {
    this.items = items;
    if (this.items && !this.differ) {
      const differFactory: IterableDifferFactory = this.differs.find(items);
      this.differ = differFactory.create();
    }
  }

  // on every system event i.e. click, timeout etc ngDoCheck is called and the component is checked,
  // which is quite a lot
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
