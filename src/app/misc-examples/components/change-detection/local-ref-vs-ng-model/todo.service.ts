import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";

export class TodoItem {
  _text: String;

  get text() {
    console.log(`%cgetting value for text '${this._text}'`, "color:orange");
    return this._text;
  }

  set text(value) {
    console.log(`%csetting value for text '${this._text}'`, "color:orange");
    this._text = value;
  }

  constructor(text: String) {
    this._text = text;
  }
}

export class TodoStore {
  public items: TodoItem[] = [];

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
    ];
  }
}
