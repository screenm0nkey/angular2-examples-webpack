import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'd-comp',
  template: `<span>{{name}}<br></span>`
})
class MyInjectableComponent {
  name = 'Yo, I am dynamically inserted component 02';
}

@Component({
  selector: 'dynamic-component-example-02',
  template: `
          <p class="path">misc-examples/components/chickens/dynamic-02.component.ts</p>
          <h4>Dynamic component creation using @ViewChild, ComponentFactoryResolver and ChangeDetectorRef</h4>
          <p class="links">
            <dlink [id]="1007"></dlink>
            <dlink [id]="80"></dlink>
          </p>
          
          <code>@ViewChild('vcr', <cur>read: ViewContainerRef, static: false</cur>) public vc: ViewContainerRef;</code>
          
          <p>For this example to work, we need to call <code>this.cdRef.detectChanges()</code> 
            in the <code>ngAfterViewInit()</code> 
            unless it will throw an ExpressionChangedAfterItHasBeenCheckedError
          </p>
                    
            <div class="example">
              <ng-container #vcr></ng-container>
            </div>  
  `
})
export class Dynamic02Component implements AfterViewInit {
  @ViewChild('vcr', { read: ViewContainerRef }) public viewContainer: ViewContainerRef;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyInjectableComponent);
    this.viewContainer.createComponent(factory);
    this.viewContainer.createComponent(factory);
    this.viewContainer.createComponent(factory);
    // if you don't run the detect changes here, you will get a 'ExpressionChangedAfterItHasBeenCheckedError' error
    this.cdRef.detectChanges();
  }


}
