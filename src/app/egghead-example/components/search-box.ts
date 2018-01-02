import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "search-box",
  template: `<div>
        <input #input type="text" (input)="update.emit(input.value)" placeholder="Search">
    </div>`
})
export class SearchBox {
  // 'update' is the name of the event the parent will listen for
  // i.e. (update)="term = $event"
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit("");
  }
}
