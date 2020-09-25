import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  template: `<span>{{name}}<br></span>`
})
export class MyInjectableComponent02 {
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
  @ViewChild('vcr', { read: ViewContainerRef }) public viewContainerRef: ViewContainerRef;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MyInjectableComponent02);
    this.viewContainerRef.createComponent(factory);
    this.viewContainerRef.createComponent(factory);
    this.viewContainerRef.createComponent(factory);
    // calling detectChanges() stops 'ExpressionChangedAfterItHasBeenCheckedError' error
    this.cdRef.detectChanges();
  }


}
