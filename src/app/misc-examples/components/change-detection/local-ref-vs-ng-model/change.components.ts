import { Component } from "@angular/core";
import { TodoItem, TodoStore } from "./todo.service";

@Component({
  selector: "change-component",
  template: `
    <p class="path">
      src/app/misc-examples/components/change-detection/local-ref-vs-ng-model/change.components.ts
    </p>
    <h4>Difference between LocalRef and NgModel when using change detection</h4>

    <p>
      To see the differnce between onPush and the default, try changing the
      <span class="red"
        >ChangeDetectionStrategy on the TodoListComponent from Push to
        Default</span
      >
      and then type into the first input ( the one using ng-model). You will see
      in out in the the console like
      <code>getting value for text 'First Item'</code>, so we can see all the
      properties of the input object are being checked. When set to onPush you will see the same check will only happen when a new item is added to the list.
    </p>



    <p class="red">You need to watch the console for this example</p>
    <p>
      <i
        >What's interesting below is if you set the change detection to default
        and type into the "Local Ref" input, which is using a local variable
        reference and not ngModel, the change detection isn't triggered. It only
        works on the ngModel
        <span class="red"
          >(change ChangeDetectionStrategy to default to see it)</span
        ></i
      >
    </p>
    <p>
      Local template variables using #reference<span class="red"
        >(press return to add item)</span
      >
    </p>

    <input
      type="text"
      [(ngModel)]="todoStr"
      (keyup.enter)="addItem(todoStr)"
      placeholder="ngModel"
    />

    <input
      #inputty
      type="text"
      (keyup.enter)="addItem(inputty.value); inputty.value = ''"
      placeholder="Local Ref"
    />

    <todolist-component
      [store]="store"
      (editme)="setTodoItem($event)"
    ></todolist-component>
  `
})
export class ChangeComponent {
  todoStr: String;
  todoItem: TodoItem;
  store: TodoStore = new TodoStore();

  constructor() {
    this.addItem("First Item");
  }

  setTodoItem(todoItem) {
    this.todoItem = todoItem;
    this.todoStr = this.todoItem.text;
  }

  addItem(todoStr: any) {
    if (todoStr) {
      if (this.todoItem) {
        this.store.updateItem(this.todoItem, todoStr);
      } else {
        this.store.addItem(new TodoItem(todoStr));
      }
      this.todoStr = this.todoItem = null;
    }
  }
}
