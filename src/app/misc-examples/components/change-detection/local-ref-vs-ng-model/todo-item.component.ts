import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { TodoItem } from './todo.service';

/*
 this component's model object is immutable, meaning the 'item' object isn't updated by the view.
 the view gets the values and doesn't change so we can use 'OnPush'
 http://victorsavkin.com/post/110170125256/change-detection-in-angular-2
 */

/* TODO ITEM COMPONENT */
@Component({
  selector: "todoitem-component",
  template: `
    <span (click)="editme.emit(item)">{{ item.text }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() editme: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log(`%cNew ToDoItem`, "color:orange", this.item.text);
  }
}
