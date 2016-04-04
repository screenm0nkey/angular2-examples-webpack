import { Component, EventEmitter, Output, Input } from 'angular2/core';
import { FORM_DIRECTIVES } from "angular2/common";

@Component({
    selector: 'filter-text-component',
    template: `
    	Filter:
    	<input 
    		type="text" 
    		placeholder="{{placeholder}}"
    		[(ngModel)]="model.filter"
    		(keyup)="filterChanged($event)" />
    `,
    directives: [FORM_DIRECTIVES]
})
export class FilterTextComponent {
    model:{ filter: any };
    @Input() placeholder:string;
    @Output() changed:EventEmitter<any> = new EventEmitter();

    constructor() {
        this.model = {filter : ''};
        console.log(this);
    }

    filterChanged(evt: Event) {
        evt.preventDefault();
        this.changed.next(this.model.filter)
    }
}