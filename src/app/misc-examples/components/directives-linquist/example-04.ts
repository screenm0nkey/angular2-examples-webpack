import {Component, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';

/**
 * BasicComponent4
 */
@Component({
  selector: 'basic-04',
  template: `
    <code>@ViewChild('foo', <cur>static: false</cur>) template: TemplateRef;</code>
    <code>@ViewChildren(TemplateRef) templates: QueryList<lgt>TemplateRef</lgt></code>
    <ng-template #woo>
        This template instance was created using <strong>@ViewChildren</strong>, ViewContainerRef.createEmbeddedView()<br>
    </ng-template>

    <ng-template #foo>
        This template instance was created using <strong>@ViewChild</strong>, ViewContainerRef.createEmbeddedView()<br>
    </ng-template>
     
  `
})
export class BasicComponent4 {
  @ViewChild('foo', {static: false}) template: TemplateRef<any>;
  @ViewChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;

  constructor(private view: ViewContainerRef) {
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.templates.toArray()[0]);
  }
}

/**
 * Example04AppComponent
 */
@Component({
  selector: 'linquist-example-04',
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/directives-linquist/example-04.ts</p>
          
          <h4>Insert dynamic templates using <lgt>ng-template</lgt>, @ViewChildren, @ViewChild, TemplateRef and ViewContainerRef.createEmbeddedView</h4>

          <p><lgt>ng-template</lgt> do not render when used in the markup </p>
          <!--  <a [routerLink]="['/misc', 'templates']">Misc Templates</a>-->
          <p>Also see <dlink id="1005"></dlink> for similar examples.</p>

          <basic-04></basic-04>
      </collapse-it>
  `
})
export class Example04AppComponent {
}

