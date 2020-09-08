import {
  Component,
  Directive,
  Injectable,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

/**
 * TemplateService
 */
@Injectable({ providedIn: "root" })
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>();
}

/**
 * TemplateStorageComponent
 */
@Component({
  selector: "template-storage-component",
  template: `
    <ng-template #header>
      <p>I'm a header</p>
    </ng-template>
    <ng-template #footer>
      <p>I'm a footer</p>
    </ng-template>
  `
})
export class TemplateStorageComponent {
  @ViewChild("header") headerTemplate: TemplateRef<any>;
  @ViewChild("footer") footerTemplate: TemplateRef<any>;

  constructor(public service: TemplateService) { }

  ngAfterViewInit() {
    this.service.templates.set("header", this.headerTemplate);
    this.service.templates.set("footer", this.footerTemplate);
  }
}

/**
 * SurroundDirective
 */
@Directive({
  selector: "[surround]"
})
export class SurroundDirective {
  constructor(
    public service: TemplateService,
    public view: ViewContainerRef,
    public template: TemplateRef<any>
  ) { }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.service.templates.get("header"));
    this.view.createEmbeddedView(this.template); // this is <button *surround>Two</button>
    this.view.createEmbeddedView(this.service.templates.get("footer"));
  }
}

/**
 * Example08AppComponent
 */
@Component({
  selector: "linquist-example-08",
  template: `
    <p class="path">
      misc-examples/components/directives-linquist/example-08.ts
    </p>
    <h4>Template Storage Service using the TemplateService</h4>
    <div style="border:solid red 2px;">
      <template-storage-component></template-storage-component>
    </div>
    <div style="border:solid green 2px;">
      <button>One</button>
      <button *surround>Two</button>
      <button>Three</button>
    </div>
  `
})
export class Example08AppComponent { }
