import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "todolist-component",
  styles: ["li {cursor: pointer}"],
  template: `
    <ul class="todo-list">
      <li *ngFor="let item of store.items">
        <todoitem-component
          [item]="item"
          (editme)="editme.emit($event)"
        ></todoitem-component>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  @Input() store;
  @Output() editme: EventEmitter<any> = new EventEmitter();
}
