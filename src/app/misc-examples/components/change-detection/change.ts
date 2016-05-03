import { Component, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import {Output} from "@angular/core";


class TodoItem {
    _text:String;
    get text() {
        console.log(`getting value for text "${this._text}"`);
        return this._text;
    }
    set text(value) {
        console.log(`setting value for text "${this._text}"`);
        this._text = value;
    }
    constructor(text:String) {
        this._text = text;
    }
}


export class TodoStore {
    items:TodoItem[] = [];

    addItem(newItem:TodoItem) {
        // we are mutating the array
        this.items.push(newItem);
    }

    updateItem(item:TodoItem, todoStr:string) : void {
        const index = this.items.indexOf(item);

        this.items = [
            ...this.items.slice(0, index),
            new TodoItem(todoStr),
            ...this.items.slice(index+1)
        ]
    }
}


/*
    this component's model object is immutable, meaning the "item" object isn't updated by the view.
    the view gets the values and doesn't change so we can use "OnPush"
    http://victorsavkin.com/post/110170125256/change-detection-in-angular-2
*/
/* TODO LIST ITEM COMPONENT */
@Component({
    selector: 'todoitem-component',
    template: `<span (click)="editme.emit(item)">{{item.text}}</span>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
    @Input() item : TodoItem;
    @Output() editme : EventEmitter<any> = new EventEmitter();
    constructor() { console.log(this); }
}
/* TODO LIST COMPONENT */
@Component({
    selector: 'todolist-component',
    directives : [TodoItemComponent],
    styles: ['li {cursor: pointer}'],
    template: `
    <ul class="todo-list">
        <li *ngFor="let item of store.items">
            <todoitem-component [item]="item" (editme)="editme.emit($event)"></todoitem-component>
        </li>
    </ul>`
})
export class TodoListComponent {
    @Input() store;
    @Output() editme : EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log(this);
    }
}


/* MAIN COMPONENT */
@Component({
    selector: 'change-component',
    template : require('./change.html'),
    styles: [require('./change.css')],
    directives : [TodoListComponent]
})
export class ChangeComponent {
    todoStr : String;
    todoItem : TodoItem;
    store : TodoStore = new TodoStore();

    constructor() {
        this.addItem('First Item');
    }
    
    setTodoItem (todoItem) {
        this.todoItem = todoItem;
        this.todoStr = this.todoItem.text;
    }
    
    addItem(todoStr:string) {
        if (todoStr) {
            if (this.todoItem) {
                this.store.updateItem(this.todoItem, todoStr)
            } else {
                this.store.addItem(new TodoItem(todoStr));
            }
            this.todoStr = this.todoItem = null;
        }
    }
}