import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'd-comp',
  template: `<span>{{name}}<br></span>`
})
class MyInjectableComponent {
  name = 'Yo, I am dynamically inserted component 03';
}


@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    debugger
    this.element.nativeElement.setAttribute(this.appHighlight, '');
  }
}

@Component({
  selector: 'dynamic-component-example-03',
  styles: [`[highlight]{background:green; color:white}`],
  template: `
      <p class='file'>misc-examples/components/chickens/dynamic-03.component.ts</p>
      <h4>NICK</h4>
      <span [appHighlight]="'highlight'">Mano Mano</span>
      <span>Mano Mano</span>
  `
})
export class Dynamic03Component {

}
