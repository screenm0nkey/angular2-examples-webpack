import {
  Component,
  Directive,
  ChangeDetectorRef,
  ViewRef,
  ViewContainerRef,
  TemplateRef,
  DoCheck,
  IterableDiffers,
  IterableDiffer
} from "@angular/core";


@Directive({
  selector: '[ngBookRepeat]',
  inputs: ['ngBookRepeatOf']
})
export class NgBookRepeat implements DoCheck {
  // items holds the collection we’re iterating on
  private items: any;
  // differ is used for change detection purposes
  private differ: IterableDiffer<any>;
  //views is a Map that will link a given item on the collection with the view that contains it
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private changeDetector: ChangeDetectorRef,
              private differs: IterableDiffers) {
  }

  // this will trigger when we set the ngBookRepeatOf input:
  set ngBookRepeatOf(items) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create(this.changeDetector);
    }
  }

  ngDoCheck(): void {
    if (this.differ) {
      let changes = this.differ.diff(this.items);
      if (changes) {
        changes.forEachAddedItem((change) => {
          let view = this.viewContainer.createEmbeddedView(this.template, {'$implicit': change.item});
          this.views.set(change.item, view);
        });
        changes.forEachRemovedItem((change) => {
          let view = this.views.get(change.item);
          let idx = this.viewContainer.indexOf(view);
          this.viewContainer.remove(idx);
          this.views.delete(change.item);
        });
      }
    }
  }
}

@Component({
  selector: 'for-template',
  template: `
<h4>Custom *ngBookRepeat template</h4>
<p>
In template that is generated, we’re going to have a local view variable <strong>#peep</strong>, 
that will receive the value from the <strong>$implicit</strong> local variable. 
That’s the name of the local variable that Angular uses when “de-sugaring” the syntax into a template.
</p>
<pre><strong>&lt;li *ngBookRepeat="let peep of people"&gt;</strong>
gets converted to
<strong>&lt;template ngBookRepeat [ngBookRepeatOf]="people" let-peep="$implicit"&gt;</strong></pre>
  <i>here in the code where we set the $implicit value to the change.item. change.item will equal peep.</i>
<pre>
let view = this.viewContainer.createEmbeddedView(this.template, &#123;'$implicit': change.item&#125;);
</pre>
  <ul>
    <li *ngBookRepeat="let peep of people">
      {{ peep.name }} is {{ peep.age }}
      <span (click)="remove(p)">[Remove]</span>
    </li>
  </ul>

  <div class="ui form">
    <div class="fields">
      <div class="field">
        <label>Name</label>
        <input type="text" #name placeholder="Name">
      </div>
      <div class="field">
        <label>Age</label>
        <input type="text" #age placeholder="Age">
      </div>
    </div>
  </div>
  <div class="ui submit button"
       (click)="add(name, age)">
    Add
  </div>
  `
})
export class ForTemplateSampleApp {
  people: any[];

  constructor() {
    this.people = [
      {name: 'Joe', age: 10},
      {name: 'Patrick', age: 21},
      {name: 'Melissa', age: 12},
      {name: 'Kate', age: 19}
    ];
  }

  remove(p) {
    let idx: number = this.people.indexOf(p);
    this.people.splice(idx, 1);
    return false;
  }

  add(name, age) {
    this.people.push({name: name.value, age: age.value});
    name.value = '';
    age.value = '';
  }
}


