import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
    selector: '[sort-by]'
})
export class SortByDirective {
    @Output() sorted:EventEmitter<any> = new EventEmitter();
    sortProperty:string;

    constructor(el:ElementRef) {
        this.sortProperty = el.nativeElement.getAttribute('sort-by');
        el.nativeElement.addEventListener('click', evt => this.elementClicked(evt));
    }

    elementClicked(event:Event) {
        event.preventDefault();
        // note. this event will only propergate up to the element which uses the directive.
        // it does not emit to all elements which are implementing the (sorting) event
        this.sorted.next(this.sortProperty);
    }
}