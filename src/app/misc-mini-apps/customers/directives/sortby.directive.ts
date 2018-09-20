import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[sort-by]'
})
export class SortByDirective {
  @Output() sorted: EventEmitter<any> = new EventEmitter();
  sortProperty: string;

  constructor(private el: ElementRef) {
    this.sortProperty = el.nativeElement.getAttribute('sort-by');
    el.nativeElement.addEventListener('click', evt => this.elementClicked(evt));
  }

  elementClicked(event: Event) {
    event.preventDefault();
    console.log(this.el.nativeElement);
    // note. this event will only propagate up to the element which uses the directive.
    // it does not emit to all elements which are implementing the (sorting) event
    this.sorted.emit(this.sortProperty);
  }
}
