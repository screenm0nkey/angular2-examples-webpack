import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";


export class TodoItem {
  _text: String;

  get text() {
    console.log(`%cgetting value for text "${this._text}"`, 'color:green');
    return this._text;
  }

  set text(value) {
    console.log(`%csetting value for text "${this._text}"`, 'color:orange');
    this._text = value;
  }

  constructor(text: String) {
    this._text = text;
  }
}


export class TodoStore {
  private items: TodoItem[] = [];

  // we are mutating the array
  addItem(newItem: TodoItem) {
    this.items.push(newItem);
  }

  updateItem(item: TodoItem, todoStr: string): void {
    const index = this.items.indexOf(item);
    this.items = [
      ...this.items.slice(0, index),
      new TodoItem(todoStr),
      ...this.items.slice(index + 1)
    ]
  }
}


/*
 this component's model object is immutable, meaning the "item" object isn't updated by the view.
 the view gets the values and doesn't change so we can use "OnPush"
 http://victorsavkin.com/post/110170125256/change-detection-in-angular-2
 */
/* TODO ITEM COMPONENT */
@Component({
  selector: 'todoitem-component',
  template: `<span (click)="editme.emit(item)">{{item.text}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() editme: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log(`%cNew ToDoItem`,'color:pink', this.item.text);
  }
}


/* TODO LIST COMPONENT */
@Component({
  selector: 'todolist-component',
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
  @Output() editme: EventEmitter<any> = new EventEmitter();
}




/* MAIN COMPONENT */
@Component({
  selector: 'change-component',
  template: `
    ${require('./change.components.html')}
    <input 
      type="text" 
      [(ngModel)]="todoStr" 
      (keyup.enter)="addItem(todoStr)" 
      placeholder="ngModel">

    <input 
      #inputty 
      type="text" 
      (keyup.enter)="addItem(inputty.value); 
      inputty.value=''" 
      placeholder="Local Ref">
      
    <todolist-component [store]="store" (editme)="setTodoItem($event)"></todolist-component>
  `,
})
export class ChangeComponent {
  todoStr: String;
  todoItem: TodoItem;
  store: TodoStore = new TodoStore();

  constructor() {
    this.addItem('First Item');
  }

  setTodoItem(todoItem) {
    this.todoItem = todoItem;
    this.todoStr = this.todoItem.text;
  }

  addItem(todoStr: string) {
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
