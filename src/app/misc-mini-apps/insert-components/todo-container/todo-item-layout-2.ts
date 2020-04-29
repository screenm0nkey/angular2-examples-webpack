import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '@insertApp/shared/models/todo-item';

@Component({
  selector: 'todo-item-layout-2',
  styles: [`.bg-completed {background-color: #85cc95;}`],
  template: `
    <div class="todo-item" *ngIf="this.todoItem" style="border: solid 4px deeppink;">
      <li class="list-group-item d-flex justify-content-between lh-condensed"
        [ngClass]="this.todoItem.completed ? 'bg-completed' :  ''">
        <div>
          <h6 class="my-0">{{todoItem.title}}</h6>
          <small class="text-muted">{{todoItem.description}}</small>
          <div *ngIf="todoItem.dueDate">
            <small>{{'add-todo.due-date' | translate}}:
              <b>{{todoItem.dueDate}}</b>
            </small>
          </div>
        </div>

        <div class="align-right btn-group-vertical">
          <button (click)="completeClick()" type="button" class="btn btn-success" aria-label="Edit">
            {{'todo-item.complete' | translate}}
          </button>
          <button *ngIf="!readOnlyTodo" (click)="editClick()" type="button" class="btn btn-info" aria-label="Edit">
            {{'todo-item.edit' | translate}}
          </button>
          <button *ngIf="!readOnlyTodo" (click)="deleteClick()" type="button" class="btn btn-danger" aria-label="Delete">
            {{'todo-item.delete' | translate}}
          </button>
        </div>
      </li>
    </div>
  `
})
export class TodoItemLayout2Component {
  @Input() public todoItem: TodoItem;
  @Input() public readOnlyTodo: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();

  public completeClick() {
    this.todoItem.completed = !this.todoItem.completed;
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
