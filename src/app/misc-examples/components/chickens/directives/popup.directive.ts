import {Directive, ElementRef} from "@angular/core";


@Directive({
  selector: '[popup]',
  inputs: ['message'],
  exportAs: 'popuppy',
  host: {
    '(click)': 'displayMessage()'
  }
})
export class PopupDirective {
  message: string;

  constructor(_elementRef: ElementRef) {
    console.log(1, _elementRef.nativeElement);
  }

  displayMessage(): void {
    alert(this.message);
  }
}


