import {Component, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';

/**
 * BasicComponent4
 */
@Component({
  selector: 'basic-04',
  template: `
      <ng-template #foo>
          This is is a template instance was created using ViewContainerRef's createEmbeddedView() method <br>
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
  selector: 'example-04',
  template: `
      <p class='file'>misc-examples/components/directives-linquist/example-04.ts</p>
      
      <h4>Using &lt;ng-template/&gt;, @ViewChild, TemplateRef and createEmbeddedView</h4>
      
      <p>templates (ng-template) do not render when used in the markup </p>
      <!--  <a [routerLink]="['/misc', 'templates']">Misc Templates</a>-->
      <p>Also see
          <dlink id="1005"></dlink>
          for similar examples.
      </p>

      <basic-04></basic-04>
  `
})
export class Example04AppComponent {
}




// ng-template
// ng-content
