import { AfterViewInit, Component, Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[mrNick]'
})
export class ThreeDirective implements AfterViewInit {

  constructor(
    // viewRef is the parent element of our directive, so in this example <div class="nick"></div>
    public view: ViewContainerRef,
    // templateRef is the host element of our directive. structural directives are just html templates
    public template: TemplateRef<any>
  ) { }

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
      <p class="path">misc-examples/components/directives-linquist/example-06.ts</p>
      <h4>How to createEmbeddedView with a Structural Directive</h4>

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
        <div class="nick">
          <span *mrNick>This content is from a component which is using a structural directive called mrNick<br></span>
        </div>
      </section>
  `
})
export class Example06AppComponent {
}
