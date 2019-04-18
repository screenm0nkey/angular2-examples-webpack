import {Component, OnInit} from '@angular/core';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../services/todo-model';

@Component({
  selector: 'new-todo',
  template: `
    <div>
      <form (submit)='onSubmit()'>
        <span>Enter to add </span>
        <input type='text' [(ngModel)]='todoModel.title' name='title' placeholder='New item'>
      </form>
    </div>`
})
export class TodoInput implements OnInit {
  todoModel: TodoModel;

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoModel = new TodoModel();
  }

  onSubmit() {
    this.todoService.addTodo(this.todoModel);
    this.todoModel = new TodoModel();
  }
}
