import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[x-large]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer2) {
    // we must interact with the dom through Renderer for webworker/server to see the changes
    // renderer.setElementStyle(element, 'fontSize', 'x-large');
    element.nativeElement.style.fontSize = 'x-large';
    element.nativeElement.style.backgroundColor = 'yellow';
  }
}
