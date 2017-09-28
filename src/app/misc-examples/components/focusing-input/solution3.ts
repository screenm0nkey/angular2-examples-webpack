import {Component, DoCheck, ElementRef, NgZone, ViewChild} from "@angular/core";

@Component({
  selector: 'solution-three',
  template: `
        <p class="file">misc-examples/components/focusing-input/solution3.ts</p>
        <h4>Solution 3 using ngZone and @ViewChild with local reference</h4>
        
        <p>We run the setTimeout outside of the NgZone so that we don't cause Angular's change detection algorithm to run after the setTimeout() finishes</p>
        
        <p>Give ngIf a chance to render the input by using a timeout.
     Then set the focus but do this outside the Angular zone to be efficient.
     There is no need to run change detection after setTimeout() runs,
     since we're only focusing an element.</p>
     
     <p>It will still work if you use settimeout in the NgZone but the ngDoCheck will be called a few more times as the component is checked</p>
        
        <button (click)="showInput()">Make it visible</button>
        <input  *ngIf="input1IsVisible" #input1>
        <button *ngIf="input1IsVisible" (click)="focusInput1()">Focus it</button>
    `,
})
export class SolutionThree implements DoCheck {
  @ViewChild('input1') input1ElementRef: ElementRef;
  private input1IsVisible: boolean = false;

  constructor(private _ngZone: NgZone) {
    console.log(this);
  }

  // run outside of the NgZone so that we don't cause Angular's change detection algorithm to run after the setTimeout() finishes
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
