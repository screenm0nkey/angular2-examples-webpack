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
      <p class="file">
        misc-examples/components/chickens/dom-adapter.component.ts
      </p>
      <h4>
        Add dynamic DOM elements to DOM using Renderer2 and <code>@Inject(DOCUMENT)</code>
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
  constructor(@Inject(DOCUMENT) public dom, public renderer: Renderer2) {}

  add() {
    const el: HTMLButtonElement = this.renderer.createElement("button");
    this.renderer.addClass(el, "test");
    el.innerText = "Click me";
    el.addEventListener("click", this.raiseEvent);
    const compEl: any = this.dom.getElementsByTagName(
      "dom-adapter-component"
    )[0];
    compEl.append(el);
  }

  raiseEvent(evt) {
    alert("hi " + evt.target.tagName);
  }
}
