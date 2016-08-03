import { Component, ChangeDetectionStrategy, Input, OnChanges, DoCheck } from '@angular/core';
import { Todo } from './StoreService';

@Component({
    selector: 'test-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<pre>{{todoItem|json}}</pre>`
})
export class TestComponent implements OnChanges, DoCheck {
    @Input() todoItem;
    // this will only be called when object is mutated as we've set ChangeDetectionStrategy to OnPush
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
    directives : [TestComponent],
    template : `
        <p>
            Type value into input and then try again with the checkbox selected. The view wont update
            whilst we're mutating the model. Only when we chnage the model reference i.e. 
        </p><pre>this.todoItem = new Todo(val);</pre>
        Make Model Immutable
        <input #chk type="checkbox" (change)="checked=chk.checked; me.focus()"/><br>
        <input type="text" #me (keyup)="updateTodo(me.value)" placeholder="Update model">
        <test-component [todoItem]="todoItem"></test-component>
    `,
})
export class ImmutableObject {
    checked : Boolean = false;
    todoItem : Todo = new Todo();

    updateTodo (val) {
        if (this.checked) {
            // immutable model
            this.todoItem = new Todo(val);
        } else {
            // mutate model
            this.todoItem.someval = val;
        }
    }
}
