import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'solution-four',
  template: `
    <p class='file'>misc-examples/components/focusing-input/solution4.ts</p>
    <h4>Correct Solution - Using local variable refs and @ViewChild to focus an input</h4>
    <dlink [id]="1009"></dlink>
    <p>
      What developers often don't realize is that it's also possible to query by local variable
      in addition to component type. Since you control your component's view, you can add
      a local variable to the input tag (e.g. <code><lgt>input #myInput type='text' /</lgt></code>) and pass the variable
      name into
      the @ViewChild query as a string. Then, once the view is initialized, you can use the
      renderer to invoke the focus method on that input.
    </p>
    <input #myInput type='text'/>
  `
})
export class SolutionFour implements AfterViewInit {
  @ViewChild('myInput', {static: false}) input: ElementRef;

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}
