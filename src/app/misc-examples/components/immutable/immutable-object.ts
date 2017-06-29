import {Component, ChangeDetectionStrategy, Input, OnChanges, DoCheck} from "@angular/core";
import {Todo} from "./StoreService";

@Component({
  selector: 'test-component-object',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<pre>{{todoItem|json}}</pre>`
})
export class TestComponentObject implements OnChanges, DoCheck {
  @Input() todoItem;
  // this will only be called when object is reference is changed as we've set ChangeDetectionStrategy to OnPush
  // http://victorsavkin.com/post/133936129316/angular-immutability-and-encapsulation
  ngOnChanges(inputChanges) {
    console.log('inputChanges', inputChanges.todoItem.currentValue);
  }

  //this is called every time$ the component is checked
  ngDoCheck() {
    console.log('ngDoCheck');
  }
}


@Component({
  selector: 'immutable-object-component',
  template: `
        <h4>Immutable Objects</h4>
        <pre>src/app/misc-examples/components/immutable/immutable.ts</pre>
        <p>
            Type value into input and then try again with the checkbox selected. The view wont update
            whilst we're mutating the model. Only when we change the model reference i.e. 
        </p><pre>this.todoItem = new Todo(val);</pre>
        
        <p>
        Please see the example the <strong>Change detection using ngModel</strong> 
        in <a [routerLink]="['/misc','change-detection']">change-detection</a>, which is similar to this examples but uses ngmodel
        to update the object properties. interestingly it doesn't have to create a new instance of the object to trigger the 
        change detection.
        </p>
        
        Make Model Immutable
        <input #chk type="checkbox" (change)="checked=chk.checked; me.focus()"/><br>
        <input type="text" #me (keyup)="updateTodo(me.value)" placeholder="Update model">
        <test-component-object [todoItem]="todoItem"></test-component-object>
    `,
})
export class ImmutableObject {
  checked: boolean = false;
  todoItem: Todo = new Todo();

  updateTodo(val) {
    if (this.checked) {
      // immutable model
      this.todoItem = new Todo(val);
    } else {
      // mutate model
      this.todoItem.someval = val;
    }
  }
}
