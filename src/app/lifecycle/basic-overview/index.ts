import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <ng-content></ng-content>
  `
})
export class MyComponent {
  @Input() message;

  constructor() {
    console.clear();
    console.log('%cconstructor', 'color:white');
  }

  ngOnInit() {
    console.log('%cOnInit', 'color:yellow');
  }

  ngOnDestroy() {
    console.log('%cOnDestroy', 'color:purple');
  }

  ngDoCheck() {
    console.log('%cDoCheck', 'color:pink');
  }

  ngOnChanges() {
    console.log('%c\n\nOnChanges', 'color:lime');
  }

  // this is used for <ng-content>
  ngAfterContentInit() {
    console.log('%cAfterContentInit', 'color:yellow');
  }

  ngAfterContentChecked() {
    console.log('%cAfterContentChecked', 'color:turquoise');
  }

  // this is used for viewChild /viewChildren
  ngAfterViewInit() {
    console.log('%cAfterViewInit', 'color:yellow');
  }

  ngAfterViewChecked() {
    console.log('%cAfterViewChecked', 'color:orangered');
  }
}

@Component({
  selector: 'lifecycle-basic',
  template: `
    <div class='comps'>
      <section>
        <p class="path">/lifecycle/basic-overview/index.ts</p>
        <h4>Basic</h4>

        <dlink [id]="16"></dlink>

        <p class="red">see console for output</p>

        <p>
            <highlight>Every time the change detection runs these lifecycle methods are run;</highlight>
            <code>DoCheck(), AfterContentChecked(), AfterViewChecked()</code>
          </p>
        
        <input [(ngModel)]='appMessage'>
      
        <my-component [message]='appMessage'>
          This content is transposed using <lgt>ng-content</lgt>: <highlight>{{appMessage}}</highlight>
        </my-component>
      </section>
    </div>
    
  `
})
export class BasicExample {
  appMessage = 'Type message here';
}
