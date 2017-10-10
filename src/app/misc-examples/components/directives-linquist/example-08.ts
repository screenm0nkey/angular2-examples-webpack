import {Component, Directive, Injectable, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";

@Injectable()
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>()
}


@Component({
  selector: 'template-storage',
  template: `
    <ng-template #header><span>I'm a header</span></ng-template>
    <ng-template #footer><span>I'm a footer</span></ng-template>
  `
})
export class TemplateStorage {
  @ViewChild('header') headerTemplate;
  @ViewChild('footer') footerTemplate;

  constructor(private service: TemplateService) {
  }

  ngAfterViewInit() {
    this.service.templates.set('header', this.headerTemplate)
    this.service.templates.set('footer', this.footerTemplate)
  }
}


@Directive({
  selector: '[surround]'
})
export class SurroundDirective {
  constructor(private service: TemplateService,
              private view: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.service.templates.get('header'));
    this.view.createEmbeddedView(this.template); // this is <button>Two</button>
    this.view.createEmbeddedView(this.service.templates.get('footer'));
  }
}


@Component({
  selector: 'example-08',
  template: `
    <h4>Template Storage Service</h4>
    <template-storage></template-storage>
  
    <button>One</button>
    <button *surround>Two</button>
    <button>Three</button>    
  `
})
export class Example08AppComponent {
}
