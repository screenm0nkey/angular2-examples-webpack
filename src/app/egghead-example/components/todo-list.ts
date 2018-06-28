import { Component, Input } from "@angular/core";
import { TodoService } from "../services/todo-service";

@Component({
  selector: "todo-list",
  template: `
    <div>
        <ul>
            <li *ngFor="let todo of todoService.todos | startedPipe : status | searchPipe : term">
                <todo-item-renderer
                    [todo]="todo"
                    (toggle)="todoService.toggleTodo($event)">
                </todo-item-renderer>
            </li>
        </ul>
    </div>`
})
export class TodoList {
  @Input() status;
  @Input() term;

  constructor(public todoService: TodoService) {}
}
