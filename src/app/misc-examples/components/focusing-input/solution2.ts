import {Component, Directive, ElementRef, Input, ViewChild, ViewChildren, OnInit, AfterViewInit, OnChanges, QueryList} from '@angular/core';

@Directive({
    selector: '[focusMe]'
})
export class FocusMe implements AfterViewInit, OnChanges {
    constructor(private elementRef: ElementRef) {
        console.log(this);
    }
    ngAfterViewInit() {
        // set focus when element first appears
        this.setFocus();
    }
    setFocus() {
        this.elementRef.nativeElement.focus();
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
}


@Component({
    selector: 'solution-two',
    directives:[FocusMe],
    template: `
  <h4>Solution 2 using @ViewChild and ElementRef</h4>
  <p>Using [focusMe] directive @ViewChild(FocusMe)</p>
	<button (click)="toggle()">Make it {{isVisible ? 'invisible' : 'visible'}}</button>
	<input *ngIf="inputIsVisible" focusMe>
	<button (click)="focusInput()" *ngIf="inputIsVisible">Focus it</button>
	`
})
export class SolutionTwo implements OnInit {
    // @ViewChild allows us access to the directive instance's api methods in the component.
    // in this case we can access ngAfterViewInit, setFocus, etc
    // @ViewChildren does the same but lets us access multiple instances
    @ViewChild(FocusMe) child : FocusMe;
    @ViewChildren(FocusMe) children : QueryList<FocusMe>;
    private inputIsVisible : Boolean = false;

    ngOnInit () {
        // notice that the "child" directive object instance is still not available as a property
        // it wont be available until the input is made visible by NgIf
        console.log(133, this);
    }

    toggle() {
        this.inputIsVisible = !this.inputIsVisible;
        setTimeout(()=>console.log(this),0)
    }
    focusInput() {
        console.log(133, this);
        // these two are accessing the same directive
        this.children.first.setFocus();
        this.child.setFocus();
    }
}
