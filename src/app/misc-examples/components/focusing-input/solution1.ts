import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";

@Directive({
  selector: "[focusMe]"
})
export class FocusMe implements AfterViewInit, OnChanges {
  // notice that we can alias the focusMe variable to hasFocus
  @Input("focusMe") hasFocus: boolean;

  constructor(private elementRef: ElementRef) {
    console.log(this);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

  // this is called if the input value "focusMe" changes
  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log("ngOnChanges", changes);
    if (changes.hasFocus && changes.hasFocus.currentValue === true) {
      this.elementRef.nativeElement.focus();
    }
  }
}

@Component({
  selector: "solution-one",
  template: `
        <p class="file">misc-examples/components/focusing-input/solution1.ts</p>
        <h4>Solution 1 using ngOnChanges ElementRef, directive and @Input</h4>
        
        <button (click)="showInput()">Make it visible</button>
        <input  *ngIf="inputIsVisible" [focusMe]="inputHasFocus">
        <button *ngIf="inputIsVisible" (click)="focusInput()">Focus it</button>
    `
})
export class SolutionOne {
  private inputIsVisible: boolean = false;
  private inputHasFocus: boolean = false;

  showInput() {
    this.inputIsVisible = true;
  }

  focusInput() {
    this.inputHasFocus = true;
    setTimeout(() => (this.inputHasFocus = false), 50); //reset value
  }
}
