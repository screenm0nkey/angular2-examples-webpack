import { Component, ViewChild, ViewContainerRef } from '@angular/core'


@Component({
  selector: 'basic-04',
  template: `
    <template #foo>
      This is content inside a template <br>
    </template>
  `
})
export class BasicComponent4{
  @ViewChild('foo') template;

  constructor(private view:ViewContainerRef){}

  ngAfterContentInit(){
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }
}

@Component({
  selector: 'example-04',
  template: `
    <h4>Using &lt;template/&gt; elements, local references and createEmbeddedView</h4>
    <basic-04></basic-04>
    Please also see <a [routerLink]="['/misc', 'templates']">Misc Templates</a>
`
})
export class Example04AppComponent{}
