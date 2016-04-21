import {Component, ViewChild, AfterViewInit, Renderer, ElementRef} from 'angular2/core';

@Component({
    selector: 'my-comp',
    template: `
    <h3>Using local variable refs and @ViewChild</h3>
    <h4 style="color: red">Working with the ElementRef directly (not recommended)</h4>
    <pre>constructor(el: ElementRef) {
    el.nativeElement.querySelector('input').focus();
  }</pre>
    <pre>
    What developers often don't realize is that it's also possible to query by local variable 
    in addition to component type.  Since you control your component's view, you can add 
    a local variable to the input tag (e.g. "#myInput") and pass the variable name into 
    the @ViewChild query as a string. Then, once the view is initialized, you can use the 
    renderer to invoke the focus method on that input.
    </pre>
    <a target="_blank" href="http://angularjs.blogspot.co.uk/2016/04/5-rookie-mistakes-to-avoid-with-angular.html">Solution found on Rookie Mistakes</a>
    <br>
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class SolutionFour implements AfterViewInit {
    @ViewChild('myInput') input: ElementRef;

    constructor(private _renderer: Renderer) {}

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
    }
}