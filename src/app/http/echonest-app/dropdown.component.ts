import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dropdown-component',
  template: `
        <form>
            <select #sel (change)='select.emit(sel.value)'>
            <option *ngFor='let result of results'>
                {{result}}
            </option>
        </select>
        </form>
    `
})
export class DropdownComponent implements OnInit {
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Input() results: Array<number>;

  ngOnInit() {
    this.select.emit(this.results[0]);
  }
}
