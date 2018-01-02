import {Component, Directive, ElementRef, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: "[ngBookIf]",
  inputs: ["ngBookIf"]
})
export class NgBookIf {
  // The view container is used to attach one or more views to the directive.
  constructor(private el: ElementRef,
              private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {
    console.log("The constructor only gets invoked once", el.nativeElement);
  }

  set ngBookIf(condition) {
    if (condition) {
      console.log(this.template.elementRef.nativeElement);
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}

@Component({
  selector: "if-template",
  template: `
    <p class="file">misc-examples/components/templates/simple-ng-if.component.ts</p>
    <h4>Custom *ngBookIf template</h4>
    <p>The view container is used to attach one or more views to the directive.
      the * before the *ngBookIf converts it into a template. it's short hand.
      see <a routerLink="../directives">A Structural Directive</a>
    </p>
    <button class="ui primary button" (click)="toggle()">
      Toggle
    </button>

    <div *ngBookIf="display">
      The message is displayed
    </div>
  `
})
export class IfTemplateSampleApp {
  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }
}
