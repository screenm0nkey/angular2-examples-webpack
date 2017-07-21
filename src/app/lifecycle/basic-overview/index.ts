import {Component, Input} from "@angular/core";

@Component({
  selector: 'my-component',
  template: `
  LifeCycle Hooks {{message}} <br>
  <ng-content></ng-content>
  `
})
export class MyComponent {
  @Input() message;

  constructor() {
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
    console.log('%cOnChanges', 'color:lime');
  }

  // this is used for <ng-content>
  ngAfterContentInit() {
    console.log('%cAfterContentInit', 'color:red');
  }

  ngAfterContentChecked() {
    console.log('%cAfterContentChecked', 'color:blue');
  }

  // this is used for viewChild /viewChildren
  ngAfterViewInit() {
    console.log('%cAfterViewInit', 'color:orange');
  }

  ngAfterViewChecked() {
    console.log('%cAfterViewChecked', 'color:green');
  }
}



@Component({
  selector: 'my-app',
  template: `
  <p class="path">/lifecycle/basic-overview/index.ts</p>
  <h4>Basic <pre>Check the Console for LifeCycle Hooks</pre></h4>
  <pre>great article on writing custom logic when things change 
  <a href="http://teropa.info/blog/2016/03/06/writing-an-angular-2-template-directive.html">Writing A Structural Directive in Angular 2</a></pre>
  <input [(ngModel)]="appMessage">
  
  <my-component [message]="appMessage">
    This is content is transposed using &lt;ng-content&gt;: {{appMessage}}
  </my-component>
  `,
})
export class BasicExample {
  appMessage = "hello";
}
