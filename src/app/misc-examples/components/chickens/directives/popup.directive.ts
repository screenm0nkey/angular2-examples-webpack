import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[popup]',
  inputs: ['message'],
  exportAs: 'popuppy',
  // host is the element using the directive
  host: {
    '(click)': 'displayMessageUsingHost()'
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
