import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'd-comp',
  template: `<span>{{name}}<br></span>`
})
export class MyComponentTemplate {
  name = 'Yo, I am dynamically inserted component 02';
}

@Component({
  selector: 'dynamic-component-example-02',
  template: `
          <p class='file'>src/app/misc-examples/components/chickens/dynamic-02.component.ts</p>
          <h4>Dynamic component creation using @ViewChild, ChangeDetectorRef, ViewContainerRef and <lgt>ng-container #vc</lgt></h4>
          <dlink [id]="1007"></dlink>
          <dlink [id]="80"></dlink>
          
          <code>@ViewChild('vc', <cur>read: ViewContainerRef, static: false</cur>) private vc: ViewContainerRef;</code>
          
          <p>For this example to work, we need to call <code>this.cdRef.detectChanges()</code> in the <code>ngAfterViewInit()</code> 
              unless it will throw an ExpressionChangedAfterItHasBeenCheckedError</p>
          
          
          <h1>Hello {{name}}</h1>
          <ng-container #vc></ng-container>
  `
})
export class Dynamic02Component implements AfterViewInit {
  @ViewChild('vc', {read: ViewContainerRef, static: false}) private viewContainerRef: ViewContainerRef;
  name :string;

  constructor(private r: ComponentFactoryResolver, private cdRef:ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    const factory = this.r.resolveComponentFactory(MyComponentTemplate);
    this.viewContainerRef.createComponent(factory);
    this.viewContainerRef.createComponent(factory);
    this.viewContainerRef.createComponent(factory);
    // if you don't run the detect changes here, you will get a 'ExpressionChangedAfterItHasBeenCheckedError' error
    this.cdRef.detectChanges();
  }


}
