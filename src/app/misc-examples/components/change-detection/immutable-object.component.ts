import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges
} from "@angular/core";
import { Todo } from "./StoreService";

@Component({
  selector: "test-component-object",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <pre>{{ todoItem | json }}</pre>
  `
})
export class TestComponentObject implements OnChanges, DoCheck {
  @Input() todoItem;
  // this will only be called when object is reference is changed as we've set ChangeDetectionStrategy to OnPush
  // http://victorsavkin.com/post/133936129316/angular-immutability-and-encapsulation
  ngOnChanges(inputChanges) {
    console.log("inputChanges", inputChanges.todoItem.currentValue);
  }

  // this is called every time$ the component is makeModelImmutable
  // checking is different to change detection
  ngDoCheck() {
    // console.log("%cngDoCheck immutable-object", "color:lime");
  }
}

@Component({
  selector: "immutable-object-component",
  template: `
    <p class="path">
      /misc-examples/components/immutable/immutable-object.ts
    </p>
    <h4>Immutable Object Example</h4>

    <p class="stong">
      Angular will still run change detection on an OnPush component when any of
      its input properties changes, when it fires an event, or when an
      observable fires an event.
    </p>

    <p>
      Type value into input and then try again with the checkbox selected. The
      view wont update whilst we're mutating the model. Only when we change the
      model reference i.e.
    </p>

    <p>
      Please see the example the
      <highlight
        >Difference between LocalRef and NgModel when using change detection </highlight
      >, which is similar to this example but uses ngmodel to update the object
      properties. interestingly it doesn't have to create a new instance of the
      object to trigger the change detection.
    </p>

    <p>
      When the checkbox is unselected there will be no update as the object is
      being mutated.
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
      (keyup)="updateTodo(me.value)"
      placeholder="Update model"
    />
    <test-component-object [todoItem]="todoItem"></test-component-object>
  `
})
export class ImmutableObject {
  makeModelImmutable: boolean = false;
  todoItem: Todo = new Todo();

  updateTodo(val) {
    if (this.makeModelImmutable) {
      // immutable model
      this.todoItem = new Todo(val);
    } else {
      // mutate model
      this.todoItem.someval = val;
    }
  }
}
