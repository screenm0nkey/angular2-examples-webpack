import {Component, Directive, ElementRef, Input, AfterViewInit, OnChanges} from '@angular/core';


@Directive({
  selector: '[focusMe]'
})
export class FocusMe implements AfterViewInit, OnChanges {
  // notice that we can alias the focusMe variable to hasFocus
  @Input('focusMe') hasFocus: boolean;

  constructor(private elementRef: ElementRef) {
    console.log(this);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

  // this is called if the input value "focusMe" changes
  ngOnChanges(changes) {
    console.log('ngOnChanges', changes);
    if (changes.hasFocus && changes.hasFocus.currentValue === true) {
      this.elementRef.nativeElement.focus();
    }
  }
}


@Component({
  selector: 'solution-one',
  template: `
        <h4>Solution 1 using ngOnChanges ElementRef</h4>
        <p>Using [focusMe] directive, and @Input</p>
        <button (click)="showInput()">Make it visible</button>
        <input *ngIf="inputIsVisible" [focusMe]="inputHasFocus">
        <button (click)="focusInput()" *ngIf="inputIsVisible">Focus it</button>
    `,
})
export class SolutionOne {
  private inputIsVisible: boolean = false;
  private inputHasFocus: boolean = false;

  showInput() {
    this.inputIsVisible = true;
  }

  focusInput() {
    this.inputHasFocus = true;
    setTimeout(() => this.inputHasFocus = false, 50); //reset value
  }
}
