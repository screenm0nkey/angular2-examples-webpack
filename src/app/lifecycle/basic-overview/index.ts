import {Component, Input} from "@angular/core";

@Component({
  selector: 'my-component',
  template: `
  LifeCycle Hooks
  {{message}}
  <ng-content></ng-content>
  `
})
export class MyComponent {
  @Input() message;

  constructor() {
    console.log(`constructor`);
  }

  ngOnInit() {
    console.log(`ngOnInit`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges`);
  }

  ngDoCheck() {
    //great article on writing custom logic when things change
    //http://teropa.info/blog/2016/03/06/writing-an-angular-2-template-directive.html
    console.log(`ngDoCheck`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked---`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }
}


@Component({
  selector: 'my-app',
  template: `
  <h4>Basic - Check the Console for LifeCycle Hooks</h4>
  <input [(ngModel)]="appMessage">
  <my-component [message]="appMessage">
    This is content: {{appMessage}}
  </my-component>
  `,
})
export class BasicExample {
  appMessage = "hello";
}
