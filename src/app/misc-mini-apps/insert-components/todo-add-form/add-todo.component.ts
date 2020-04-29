import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItem } from '@insertApp/shared/models/todo-item';
import { TodoContainerService } from '@insertApp/todo-container/todo-container.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  private editingIndex = -1;

  public isLoading = false;

  private _currentTODO: TodoItem = new TodoItem('', '');
  public get currentToDo(): TodoItem {
    return this._currentTODO;
  }
  @Input()
  public set currentToDo(value: TodoItem) {
    this._currentTODO = Object.assign({}, value);
    this.editingIndex = this.todoListService.todoList.findIndex(
      todo => todo.id === value.id
    );
  }

  constructor(private todoListService: TodoContainerService) { }

  ngOnInit() { }

  save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }
    this.isLoading = true;

    if (this.isEditing()) {
      this.todoListService.updateTodo(this.currentToDo).pipe(first()).subscribe(() => {
        this.isLoading = false;
        const currentTODOClone = Object.assign({}, this.currentToDo);
        this.todoListService.todoList[this.editingIndex] = currentTODOClone;
        this.setAdding();
        form.resetForm();
      })
    } else {
      this.todoListService.addTodo(this.currentToDo).pipe(first()).subscribe(() => {
        this.isLoading = false;
        const currentTODOClone = Object.assign({}, this.currentToDo);
        this.todoListService.todoList.push(currentTODOClone);
        this.currentToDo = new TodoItem('', '');
        form.resetForm();
      })
    }
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
