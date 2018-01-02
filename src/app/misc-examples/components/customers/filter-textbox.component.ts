import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "filter-text-component",
  template: `
    	Filter:
    	<input 
    		type="text" 
    		placeholder="{{placeholder}}"
    		[(ngModel)]="model.filter"
    		(keyup)="filterChanged($event)" />
    `
})
export class FilterTextComponent {
  model: { filter: any };
  @Input() placeholder: string;
  @Output() changed: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.model = { filter: "" };
    console.log(this);
  }

  filterChanged(evt: Event) {
    evt.preventDefault();
    this.changed.emit(this.model.filter);
  }
}
