import {Component, Inject, Renderer, ElementRef} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";


@Component({
  selector: 'dom-adapter-component',
  styles: [`.test{
        color:green;
      }`],
  template: `
        <div>
            <h4>
                Accessing the DOM using Renderer and vanilla JS
            </h4>
            
            <button class="mr-button" (click)="add($event)">
                BrowserDomAdapter example - Click to Add New Element
            </button>
        </div> 
    `
})
export class DomAdapterComponent {

  MyComponent() {
  }

  constructor(@Inject(DOCUMENT) public dom, private renderer: Renderer) {
  }

  add() {
    var el = document.createElement('a');
    this.renderer.setElementClass(el, 'test', true);
    this.renderer.setText(el, 'click me');
    el.addEventListener('click', this.raiseEvent);
    var compEl: any = this.dom.getElementsByTagName('dom-adapter-component')[0];
    compEl.append(el);
  }

  raiseEvent(evt) {
    alert('hi ' + evt.target.tagName);
  }
}
