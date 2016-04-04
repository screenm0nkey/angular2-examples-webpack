import { Component, ChangeDetectionStrategy, Input, OnInit, OnChanges} from 'angular2/core';
import { Store, Todo } from './StoreService';



@Component({
    selector: 'test-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<ul><li *ngFor="#todo of todos">{{todo.someval}}</li></ul>`
})
export class TestComponent implements OnInit, OnChanges {
    @Input() todos;

    constructor() {
        this.todos = [];
    }
    ngOnInit() {
        console.log(55, this.todos);
    }
    // this will only be called if the @input changes
    ngOnChanges(inputChanges) {
        console.log(33, this.todos);
    }
}


@Component({
    selector: 'immutable-list-component',
    directives : [TestComponent],
    template : `
        <h4>The list will only update when the @Inputs changes by creating a new array each time.
        Mutuating it won't cause it to update as we're using onPush which looks for a compoents Inputs to change</h4>
        Make Model Immutable
        <input #chk type="checkbox" (change)="checked=chk.checked; me.focus()"/><br>
        <input type="text" #me (keyup.enter)="addTodo(me, me.value)" placeholder="Press enter to add">
        <hr>
        <test-component [todos]="store.todos"></test-component>
    `,
})
export class ImmutableList {
    checked : Boolean = false;

    constructor(public store : Store) {
        console.log(108, this.store);
    }

    addTodo (el: HTMLInputElement, val:string) {
        if (this.checked) {
            // immutable array
            this.store.todos = this.store.todos.concat(new Todo(val));
        } else {
            // mutate array
            this.store.todos.push(new Todo(val));
            console.log(this.store.todos);
        }
        console.log(this.store);
        el.value = '';
    }
}