import {Component, Directive, ElementRef, ViewContainerRef, TemplateRef} from "@angular/core";

@Directive({
  selector: '[three]'
})
export class ThreeDirective {
  constructor(el: ElementRef,
              private view: ViewContainerRef,
              private template: TemplateRef<any>) {
    console.log('el.nativeElement', el.nativeElement);
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template)
    this.view.createEmbeddedView(this.template)
    this.view.createEmbeddedView(this.template)
  }
}

@Component({
  selector: 'example-06',
  template: `
    <h4> A Structural Directive</h4>
<pre><strong>"let-" is only supported on template elements</strong></pre>
<pre>&lt;span *three&gt;Hello, Angular&lt;/span&gt;
  is the same as
  &lt;template three&gt;
    &lt;span&gt;Hello, Angular&lt;/span&gt;
  &lt;/template&gt;</pre>
  
    <span *three><strong>We</strong> can this as a template inside our directive, </span>    
`
})
export class Example06AppComponent {
}
