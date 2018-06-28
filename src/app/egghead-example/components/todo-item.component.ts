import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "todo-item-renderer",
  template: `
    <style>
        .completed{
            text-decoration: line-through;
        }
        .text {
          width : 75px;
          display: inline-block;
        }
    </style>
    <div>
        <span [ngClass]="todo.status" class="text">{{todo.title | capitalizePipe }}</span>
        <button (click)="toggle.emit(todo)">Set As Completed</button>
    </div>`
})
export class TodoItem {
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
