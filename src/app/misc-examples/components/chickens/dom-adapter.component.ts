import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'dom-adapter-component',
  styles: [
      `.test {
      color: green;
    }`
  ],
  template: `
    <div>
      <p class='file'>misc-examples/components/chickens/dom-adapter.component.ts</p>
      <h4>Accessing the DOM using Renderer2 and <code>@Inject(DOCUMENT)</code></h4>
      <div class='links'>
        <a href='https://www.yearofmoo.com/2016/02/rendering-in-angular2.html#why-rendering'>
          Rendering in Angular2
        </a>
      </div>
      <button class='mr-button' (click)='add($event)'>
        Click to Add New Element
      </button>
    </div>
  `
})
export class DomAdapterComponent {
  constructor(@Inject(DOCUMENT) public dom, private renderer: Renderer2) {
  }

  add() {
    const el: HTMLButtonElement = this.renderer.createElement('button');
    this.renderer.addClass(el, 'test');
    el.innerText = 'CLick me';
    el.addEventListener('click', this.raiseEvent);
    const compEl: any = this.dom.getElementsByTagName('dom-adapter-component')[0];
    compEl.append(el);
  }

  raiseEvent(evt) {
    alert('hi ' + evt.target.tagName);
  }
}
