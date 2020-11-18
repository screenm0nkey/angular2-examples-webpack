import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '@standaloneApp/shared/models/todo-item';

@Component({
  selector: 'todo-item-layout-1',
  styles: [`
    .bg-completed {
      background-color: #85cc95;
    }
    .card-content {
      padding: 0 20px;
    }
    .card-actions {
      display: flex;
      justify-content: space-around;
    } 
  `],
  template: `
    <mat-card class="todo-card" [ngClass]="this.todoItem.completed ? 'bg-completed' :  ''" style="background-color: gold">
    <h3>TODO ITEM LAYOUT 1</h3>
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{todoItem.title}}</mat-card-title>
        <mat-card-subtitle>{{todoItem.description}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content class="card-content">
        <p *ngIf="todoItem.dueDate">
          <small>{{'add-todo.due-date' | translate}}:
            <b>{{todoItem.dueDate}}</b>
          </small>
        </p>
      </mat-card-content>
      <mat-card-actions class="card-actions">
        <button 
          (click)="completeClick()" 
          type="button" 
          class="btn btn-success" 
          aria-label="Edit">
          {{'todo-item.complete' | translate}}
        </button>
        <button 
          *ngIf="!readOnlyTodo" 
          (click)="editClick()" 
          type="button" 
          class="btn btn-info" 
          aria-label="Edit">
          {{'todo-item.edit' | translate}}
        </button>
        <button 
          *ngIf="!readOnlyTodo" 
          (click)="deleteClick()" 
          type="button" 
          class="btn btn-danger" 
          aria-label="Delete">
          {{'todo-item.delete' | translate}}
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class TodoItemLayout1Component {
  @Input() public todoItem: TodoItem;
  @Input() public readOnlyTodo: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();

  constructor() { }

  public ngOnInit() { }

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
