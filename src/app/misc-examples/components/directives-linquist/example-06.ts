import {AfterViewInit, Component, Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';

/**
 * ThreeDirective
 */
@Directive({
  selector: '[mrNick]'
})
export class ThreeDirective implements AfterViewInit {
  constructor(el: ElementRef, private view: ViewContainerRef, private template: TemplateRef<any>) {
    console.log(123, 'el.nativeElement', el.nativeElement);
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }
}


/**
 * Example06AppComponent
 */
@Component({
  selector: 'example-06',
  template: `
      <p class='file'>misc-examples/components/directives-linquist/example-06.ts</p>
      <h4> A Structural Directive</h4>
      <p><external-link [id]="56"></external-link></p>
      <strong>'let-' is only supported on template elements</strong>

      <pre>&lt;span *mrNick&gt;Hello, Angular&lt;/span&gt;</pre>
      is the same as
      <pre>&lt;template mrNick&gt;
    &lt;span&gt;Hello, Angular&lt;/span&gt;
&lt;/template&gt;</pre>

      <p>For a structural directive, we're going to add in an *.</p>
      <p> But the asterisk version of a directive is essentially the shorthand for wrapping something in a template
          element, which will allow us to use this as a template inside of our directive</p>
      <p>If you look at console.log(el.nativeElement) for the mrNick directive above you will now see template bindings
          rather than a DOM element</p>

      <span *mrNick><strong>We</strong> can this as a template inside our directive, </span>
  `
})
export class Example06AppComponent {
}
