//our root app component
import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core'

@Component({
  selector: 'd-comp',
  template: `<span>{{name}}<br></span>`
})
export class DComponent {
  name = 'I am dynamically inserted component';
}

@Component({
  selector: 'dynamic-component',
  template: `
    <p class="file">src/app/misc-examples/components/changed-after-check/dynamic.component.ts</p>
    <h4>Dynamic component instantiation</h4>
    <p><a href="https://stackoverflow.com/questions/41519481/angular2-material-dialog-has-issues-did-you-add-it-to-ngmodule-entrycomponent#">entryComponents</a></p>
    <p>This pattern is different because unlike the previous ones where input bindings were affected this pattern 
    causes DOM update operation to throw the error. This pattern is illustrated by this plunker. The application is 
    designed to have a parent component that dynamically adds a child component in the ngAfterViewInit. Since adding a
     child component requires DOM modification and ngAfterViewInit lifecycle hook is triggered after the Angular updated DOM the error is thrown.</p>
   
    <h1>Hello {{name}}</h1>
    <ng-container #vc></ng-container>
  `,
})
export class DynamicComponent implements AfterViewInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc;
  name: string = 'I am DynamicComponent';

  constructor(private r: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    const f = this.r.resolveComponentFactory(DComponent);
    this.vc.createComponent(f);
    this.vc.createComponent(f);
    this.vc.createComponent(f);
  }
}

