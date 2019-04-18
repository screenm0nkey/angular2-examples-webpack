import {Injectable} from '@angular/core';
import {COMPLETED, STARTED, TodoModel} from './todo-model';

@Injectable({providedIn: 'root'})
export class TodoService {
  todos: TodoModel[] = [
    new TodoModel('eat'),
    new TodoModel('sleep'),
    new TodoModel('dance', COMPLETED),
    new TodoModel('party'),
    new TodoModel('work'),
    new TodoModel('play'),
    new TodoModel('record', COMPLETED),
    new TodoModel('earn'),
    new TodoModel('charm', COMPLETED),
    new TodoModel('exercise'),
    new TodoModel('swim', COMPLETED),
    new TodoModel('code')
  ];

  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo: TodoModel) {
    const i = this.todos.indexOf(todo);
    const status = todo.status == STARTED ? COMPLETED : STARTED;
    const toggledTodo = (<any>Object).assign({}, todo, {status});

    this.todos = [
      ...this.todos.slice(0, i),
      toggledTodo,
      ...this.todos.slice(i + 1)
    ];
  }
}
