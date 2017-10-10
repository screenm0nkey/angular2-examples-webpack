import {AfterViewInit, Component, ElementRef, Renderer, ViewChild} from "@angular/core";

@Component({
  selector: 'solution-four',
  template: `
    <p class="file">misc-examples/components/focusing-input/solution4.ts</p>
    <h4>Correct Solution - Using local variable refs and @ViewChild</h4>
    <p class="strong">
      Working with the ElementRef directly is not recommended when accessing elements in a view <br>
      use <code>_renderer.invokeElementMethod</code>
    </p>
    <p>
    <code>constructor(el: ElementRef) 
        el.nativeElement.querySelector('input').focus();
    </code>
    </p>
    <p>
    What developers often don't realize is that it's also possible to query by local variable 
    in addition to component type.  Since you control your component's view, you can add 
    a local variable to the input tag (e.g. <code>&lt;input #myInput type="text" /&gt;</code>) and pass the variable name into 
    the @ViewChild query as a string. Then, once the view is initialized, you can use the 
    renderer to invoke the focus method on that input.
    </p>
   
    <input #myInput type="text" />
    <div> Some other content </div>
  `
})
export class SolutionFour implements AfterViewInit {
  @ViewChild('myInput') input: ElementRef;

  constructor(private _renderer: Renderer) {
  }

  ngAfterViewInit() {
    this._renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);

  }
}
