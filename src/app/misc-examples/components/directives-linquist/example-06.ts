import { AfterViewInit, Component, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * ThreeDirective
 */
@Directive({
  selector: '[mrNick]'
})
export class ThreeDirective implements AfterViewInit {

  constructor(el: ElementRef, public view: ViewContainerRef, public template: TemplateRef<any>) {
    console.log(123, 'el.nativeElement', el.nativeElement);
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }
}

/**
 * Example06AppComponent
 */
@Component({
  selector: 'linquist-example-06',
  template: `
      <p class='file'>misc-examples/components/directives-linquist/example-06.ts</p>
      <h4>Structural Directive - How to access content in a Structural Directive and use it as a template</h4>
      <p><dlink [id]="56"></dlink></p>

      <code><lgt>span *mrNick</lgt>Hello, Angular<lgt>/span</lgt></code>is the same as<code><lgt>template mrNick</lgt><lgt>span</lgt>Hello, Angular<lgt>/span</lgt><lgt>/template</lgt></code>

      <p>For a structural directive, we're going to add in an *.</p>
      
      <p class="highlight"> 
        The asterisk version of a directive is essentially the shorthand for wrapping something in a template
          element, which will allow us to use this as a template inside of our directive
        </p>
      
      <p>If you look at console.log(123, el.nativeElement) for the mrNick directive above you will now see template bindings
          rather than a DOM element
      </p>
      
      <section style="background-color:antiqueWhite">
        <span *mrNick>this content is from a component which is using a structural directive<br></span>
      </section>
  `
})
export class Example06AppComponent {
}
