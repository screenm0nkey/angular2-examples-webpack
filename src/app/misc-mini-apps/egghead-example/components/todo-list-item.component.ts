import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COMPLETED, STARTED} from "../services/todo-model";

@Component({
  selector: 'todo-item-renderer',
  template: `
    <style>
        .Completed{
            text-decoration: line-through;
        }
        .text {
          width : 75px;
          display: inline-block;
        }
    </style>
    <div>
        <span [ngClass]='todo.status' class='text'>{{todo.title | initialCapsPipe }}</span>
        <button (click)='toggle.emit(todo)'>Set As {{buttonText}}</button>
    </div>`
})
export class TodoItem implements OnInit {
  @Input() todo;
  @Output() toggle = new EventEmitter();

  buttonText: string;

  ngOnInit(): void {
    this.buttonText = this.todo.status === STARTED ? COMPLETED : STARTED;
  }
}
