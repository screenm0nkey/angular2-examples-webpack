import { Component } from '@angular/core';
import { TodoItem } from '@insertApp/shared/models/todo-item';
import { TodoContainerService } from './todo-container.service';

@Component({
  selector: 'todo-container',
  templateUrl:'./todo-container.component.html',
})
export class TodoContainerComponent {
  public currentToDo: TodoItem = new TodoItem('', '');

  constructor(private todoService: TodoContainerService) { }

  get todoList() {
    return this.todoService.todoList;
  }

  public deleteTodo(id: string) {
    const deleteIndex = this.todoService.todoList.findIndex((todo) => todo.id === id);
    this.todoService.todoList.splice(deleteIndex, 1);
  }

  public editTodo(todoItem: TodoItem) {
    this.currentToDo = todoItem;
  }
}
