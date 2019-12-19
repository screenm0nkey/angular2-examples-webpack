import { Component, Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[popup]",
  inputs: ["message"],
  exportAs: "popuppy",
  // host is the element using the directive
  host: {
    "(click)": "displayMessageUsingHost()"
  }
})
export class PopupDirective {
  message: string;

  constructor(private elRef: ElementRef) {
    console.log(1, elRef.nativeElement);
  }

  displayMessageUsingHost(msg: string): void {
    msg = msg || this.message;
    this.elRef.nativeElement.innerText += ` - host:${msg}`;
  }

  displayMessage2(msg: string): void {
    msg = msg || this.message;
    this.elRef.nativeElement.innerText += ` - api:${msg}`;
  }
}

@Component({
  selector: "local-var-directive",
  template: `
    <p class="file">
      misc-examples/components/chickens/directives/popup.directive.ts
    </p>
    <h4>Access a @Directive API using exportAs and local variables</h4>
    <button popup #popup1="popuppy" message="Socks">
      Socks - Click Me
    </button>
    <br />
    <button (click)="popup1.displayMessage2('Shirt')">
      I'm accessing the directive's API using a local variable
    </button>
    <br />
    <button popup #popup2="popuppy" message="Pants">
      Pants - Click me
    </button>
    <br />
    <button (click)="popup2.displayMessage2('Trousers')">
      I'm accessing the directive's API using a local variable
    </button>
  `
})
export class AccessLocalVariableDirective {}
