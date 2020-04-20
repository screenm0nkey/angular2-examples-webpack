import {Component, EventEmitter, Output} from '@angular/core';
import {COMPLETED, STARTED} from "../services/todo-model";

@Component({
  selector: 'status-selector',
  template: `
    <div>
      <select #sel (change)='select.emit(sel.value)'>
        <option *ngFor='let status of statuses'>
          {{status}}
        </option>
      </select>
    </div>`
})
export class StatusSelector {
  @Output() select = new EventEmitter();
  statuses = [STARTED, COMPLETED];

  ngOnInit() {
    // default to selected
    this.select.emit(this.statuses[0]);
  }
}
