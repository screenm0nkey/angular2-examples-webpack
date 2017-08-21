import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[popup]',
  inputs: ['message'],
  exportAs: 'popuppy',
  // host is the element using the directive
  host: {
    '(click)': 'displayMessage()'
  }
})
export class PopupDirective {
  message: string;

  constructor(private elRef: ElementRef) {
    console.log(1, elRef.nativeElement);
  }

  displayMessage(msg:string): void {
    msg = msg || this.message;
    this.elRef.nativeElement.innerText += (` - ${msg}`);
  }
}


