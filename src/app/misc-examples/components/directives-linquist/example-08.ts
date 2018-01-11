import {Component, Directive, Injectable, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";

/**
 * TemplateService
 */
@Injectable()
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>();
}

/**
 * TemplateStorageComponent
 */
@Component({
  selector: "template-storage-component",
  template: `
    <ng-template #header><span>I'm a header</span></ng-template>
    <ng-template #footer><span>I'm a footer</span></ng-template>
  `
})
export class TemplateStorageComponent {
  @ViewChild("header") headerTemplate: TemplateRef<any>;
  @ViewChild("footer") footerTemplate: TemplateRef<any>;

  constructor(private service: TemplateService) {
  }

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
  constructor(private service: TemplateService,
              private view: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.service.templates.get("header"));
    this.view.createEmbeddedView(this.template); // this is <button>Two</button>
    this.view.createEmbeddedView(this.service.templates.get("footer"));
  }
}

/**
 * Example08AppComponent
 */
@Component({
  selector: "example-08",
  template: `
    <h4>Template Storage Service using the TemplateService</h4>
    <template-storage-component></template-storage-component>
    <button>One</button>
    <button *surround>Two</button>
    <button>Three</button>
  `
})
export class Example08AppComponent {
}
