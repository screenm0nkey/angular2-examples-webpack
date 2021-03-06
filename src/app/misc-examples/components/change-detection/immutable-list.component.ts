import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit
} from "@angular/core";
import { Store, Todo } from "./StoreService";

@Component({
  selector: "test-component-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.someval }}</li>
    </ul>
  `
})
export class TestComponentList implements OnChanges {
  @Input() todos;

  constructor() {
    this.todos = [];
  }

  // this will only be called if the @input changes
  ngOnChanges(inputChanges) {
    console.log('ngOnChanges immutable-list', this.todos);
  }
}

@Component({
  selector: "immutable-list-component",
  template: `
    <collapse-it>
      <p class="path">/misc-examples/components/immutable/immutable-list.ts</p>
      <h4>Immutable List Example</h4>
      <p>
        The list will only update when the @Inputs changes by creating a new
        array each time. Mutuating it won't cause it to update as we're using
        onPush which looks for a compoents Inputs to change
      </p>

      Make Model Immutable
      <input
        #chk
        type="checkbox"
        (change)="makeModelImmutable = chk.makeModelImmutable; me.focus()"
      /><br />
      <input
        type="text"
        #me
        (keyup.enter)="addTodo(me, me.value)"
        placeholder="Press enter to add"
      />
      <test-component-list [todos]="store.todos"></test-component-list>
    </collapse-it>
  `
})
export class ImmutableList {
  makeModelImmutable: boolean = false;

  constructor(public store: Store) {
  }

  addTodo(el: HTMLInputElement, val: string) {
    if (this.makeModelImmutable) {
      // immutable array
      this.store.todos = this.store.todos.concat(new Todo(val));
    } else {
      // mutate array
      this.store.todos.push(new Todo(val));
      console.log(this.store.todos);
    }
    console.log(this.store);
    el.value = "";
  }
}
