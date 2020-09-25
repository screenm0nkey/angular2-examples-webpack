import { Component, Inject, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "dom-adapter-component",
  styles: [
    `
      .test {
        color: black;
      }
    `
  ],
  template: `
    <div>
      <p class="path">
        misc-examples/components/chickens/dom-adapter.component.ts
      </p>
      <h4>
        Add Elements to the DOM using Renderer2 and <code>@Inject(DOCUMENT)</code>
      </h4>
      <div class="links">
        <dlink [id]="65"></dlink>
      </div>
      <button class="mr-button" (click)="add()">
        Click to Add New Element
      </button>
    </div>
  `
})
export class DomAdapterComponent {
  constructor(@Inject(DOCUMENT) public dom: HTMLDocument, private renderer: Renderer2) { }

  add() {
    const button: HTMLButtonElement = this.renderer.createElement("button");
    this.renderer.addClass(button, "test");
    button.innerText = "Click me";
    button.addEventListener("click", this.raiseEvent);
    const elements: HTMLCollectionOf<Element> = this.dom.getElementsByTagName("dom-adapter-component");
    const el: Element = elements[0];
    el.append(button);
  }

  raiseEvent(evt) {
    alert("hi " + evt.target.tagName);
  }
}
