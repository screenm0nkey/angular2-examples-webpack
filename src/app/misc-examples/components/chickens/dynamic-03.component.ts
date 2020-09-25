import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, ElementRef, ViewChild, Input, Renderer2, AfterViewChecked, ViewChildren, QueryList, ViewContainerRef, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-child',
  styles: [`[highlight]{background:green; color:white}`],
  template: `<span [appHighlight]="'highlight'">{{name}}</span>`
})
export class MyInjectableComponent03 {
  name = 'Yo, I am dynamically inserted component 03';
}


@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setAttribute(this.element.nativeElement, this.appHighlight, '');
  }
}

@Component({
  selector: 'dynamic-component-example-03',
  template: `
      <p class="path">misc-examples/components/chickens/dynamic-03.component.ts</p>
      <h4>Adding, Removing an Embedded View into a  ViewContainerRef</h4>
      <dlink id="99"></dlink>

      <p>parent works!</p>
      <ng-container #viewContainer></ng-container>
      <ng-template>
        <app-child #child></app-child>
      </ng-template>
      <button (click)="removeChild()">Remove Child</button>
  `
})
export class Dynamic03Component implements AfterViewChecked, AfterViewInit {
  @ViewChildren('child', { read: ElementRef }) childComp: QueryList<ElementRef>
  @ViewChild('viewContainer', { 'read': ViewContainerRef }) viewcontainerRef: ViewContainerRef;
  //  TemplateRef is created by Angular compiler when it encounters ng-template
  @ViewChild(TemplateRef) templateRef: TemplateRef<null>;

  constructor(
    public cdRef: ChangeDetectorRef) { }

  // invoked after the default change detector has completed one change check cycle
  ngAfterViewChecked() {
    console.log(55, this.childComp.length)
  }

  ngAfterViewInit() {
    this.viewcontainerRef.createEmbeddedView(this.templateRef);
    // calling detectChanges() stops 'ExpressionChangedAfterItHasBeenCheckedError' error
    this.cdRef.detectChanges();
  }

  removeChild() {
    this.viewcontainerRef.remove()
  }

}
