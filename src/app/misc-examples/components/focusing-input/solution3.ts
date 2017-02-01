import {Component, ViewChild, NgZone, DoCheck} from "@angular/core";

@Component({
  selector: 'solution-three',
  template: `
        <h4>Solution 3 using ngZone and @ViewChild with local reference</h4>
        <button (click)="showInput()">Make it visible</button>
        <input #input1 *ngIf="input1IsVisible">
        <button (click)="focusInput1()" *ngIf="input1IsVisible">Focus it</button>
    `,
})
export class SolutionThree implements DoCheck {
  @ViewChild('input1') input1ElementRef;
  private input1IsVisible: Boolean = false;

  constructor(private _ngZone: NgZone) {
    console.log(this);
  }

  // don't use NgZone so that we don't cause Angular's change detection algorithm to run after the setTimeout() finishes
  showInput() {
    this.input1IsVisible = true;
    // Give ngIf a chance to render the <input> using a timeout.
    // Then set the focus but do this outside the Angualar zone to be efficient.
    // There is no need to run change detection after setTimeout() runs,
    // since we're only focusing an element.
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this.focusInput1(), 0);
    });
  }

  setFocus(elementRef) {
    elementRef.nativeElement.focus();
  }

  // if you remove the ngZone stuff above, you'll see
  // this log 3 times instead of 1 when you click the
  // "Make it visible" button.
  ngDoCheck(): any {
    console.log(13001, 'doCheck');
  }

  focusInput1() {
    this.setFocus(this.input1ElementRef);
  }
}
