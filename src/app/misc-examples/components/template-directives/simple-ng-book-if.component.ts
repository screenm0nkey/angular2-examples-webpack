import {Component, Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngBookIf]',
  inputs: ['ngBookIf']
})
export class NgBookIf {
  // The view container is used to attach one or more views to the directive.
  constructor(private el: ElementRef,
              private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  set ngBookIf(condition) {
    console.log(this.template.elementRef.nativeElement);
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}

@Component({
  selector: 'ng-book-if-template',
  template: `
    <p class='file'>misc-examples/components/directive-templates/simple-ng-if.component.ts</p>
 
    <h4>Custom *ngBookIf template</h4>

    <dlink [id]="16"></dlink>
    
    <p>The view container is used to attach one or more views to the directive.
      the * before the *ngBookIf converts it into a template. it's short hand.
    </p>
    <button class='ui primary button' (click)='toggle()'>
      Toggle
    </button>
    <div style='border:solid red 2px;' *ngBookIf='display'>
      <code>this.template.elementRef.nativeElement === this.el.nativeElement</code>
    </div>
  `
})
export class IfTemplateSampleApp {
  display: boolean = true;

  toggle() {
    this.display = !this.display;
  }
}
