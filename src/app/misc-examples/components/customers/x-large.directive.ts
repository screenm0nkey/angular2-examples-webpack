import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[x-large]'
})
export class XLarge {
    constructor(element:ElementRef, renderer:Renderer) {
        // we must interact with the dom through Renderer for webworker/server to see the changes
        // renderer.setElementStyle(element, 'fontSize', 'x-large');
        element.nativeElement.style.fontSize = 'x-large';
        element.nativeElement.style.backgroundColor = 'yellow';
    }
}