import { Directive, ElementRef, Input, ViewContainerRef, TemplateRef } from 'angular2/core';

@Directive({
    selector: '[unless]'
})
export class Unless {
    constructor(viewContainer: ViewContainerRef, el : ElementRef, tr : TemplateRef) {
        console.log(1000, el.nativeElement);
        console.log(1001, viewContainer.element.nativeElement);
        console.log(1002, tr.elementRef.nativeElement);
    }
}