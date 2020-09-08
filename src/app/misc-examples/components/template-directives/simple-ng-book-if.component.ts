import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: "[ngBookIf]",
  inputs: ["ngBookIf"]
})
export class NgBookIf {
  // The view container is used to attach one or more views to the directive.
  constructor(
    public viewContainer: ViewContainerRef,
    public template: TemplateRef<any>
  ) { }

  set ngBookIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}

@Component({
  selector: "ng-book-if-template",
  template: `
    <p class="path">
      misc-examples/components/template-directives/simple-ng-book-if.component.ts
    </p>

    <h4>Structural Directive - Custom *ngBookIf template</h4>

    <section class="links">
      <dlink [id]="16"></dlink>
      <dlink [id]="56"></dlink>
    </section>

    <p>
      The view container is used to attach one or more views to the directive.
      the * before the *ngBookIf converts it into a template. it's short hand.
    </p>

    <button class="ui primary button" (click)="toggle()">
      Toggle the box below
    </button>

    <div style="border:solid red 2px;" *ngBookIf="display">
      <code
        >this.template.elementRef.nativeElement === this.el.nativeElement</code
      >
    </div>
  `
})
export class IfTemplateSampleApp {
  display: boolean = true;

  toggle() {
    this.display = !this.display;
  }
}
