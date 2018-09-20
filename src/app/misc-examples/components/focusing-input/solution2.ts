import {
  AfterViewInit, Component, Directive, ElementRef, OnChanges, OnInit, QueryList, SimpleChange, ViewChild,
  ViewChildren
} from '@angular/core';

@Directive({
  selector: '[focusIt]'
})
export class FocusIt implements AfterViewInit, OnChanges {
  constructor(private elementRef: ElementRef) {
    console.log(this);
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log(changes);
  }

  ngAfterViewInit() {
    this.setMrsFocus(); // set focus when element first appears
  }

  setMrsFocus() {
    this.elementRef.nativeElement.focus();
  }
}

@Component({
  selector: 'solution-two',
  template: `
    <p class='path'>misc-examples/components/focusing-input/solution2.ts</p>
    <h4>Solution 2 @ViewChild and calling a method on the childview directive</h4>


    <button (click)='toggle()'>Make it {{isVisible ? 'invisible' : 'visible'}}</button>
    <input *ngIf='inputIsVisible' focusIt>
    <button (click)='focusInput()' *ngIf='inputIsVisible'>Focus it</button>
  `
})
export class SolutionTwo implements OnInit {
  // @ViewChild allows us access to the directive instance's api methods in the component.
  // in this case we can access ngAfterViewInit, setFocus, etc
  // @ViewChildren does the same but lets us access multiple instances
  @ViewChild(FocusIt) child: FocusIt;
  @ViewChildren(FocusIt) children: QueryList<FocusIt>;
  private inputIsVisible: boolean = false;

  ngOnInit() {
    // notice that the 'child' directive object instance is still not available as a property
    // it wont be available until the input is made visible by NgIf
    console.log(133, this);
  }

  toggle() {
    this.inputIsVisible = !this.inputIsVisible;
    setTimeout(() => console.log(this), 0);
  }

  focusInput() {
    console.log(133, this);
    // these two are accessing the same directive
    this.children.first.setMrsFocus();
    this.child.setMrsFocus();
  }
}
