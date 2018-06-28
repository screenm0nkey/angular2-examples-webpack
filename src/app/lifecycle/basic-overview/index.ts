import {Component, Input} from "@angular/core";

@Component({
  selector: "my-component",
  template: `
    <p><code>@Input() message</code> LifeCycle Hooks <strong>{{message}}</strong></p>
    <br><br>
    <ng-content></ng-content>
  `
})
export class MyComponent {
  @Input() message;

  constructor() {
    console.log("%cconstructor", "color:white");
  }

  ngOnInit() {
    console.log("%cOnInit", "color:yellow");
  }

  ngOnDestroy() {
    console.log("%cOnDestroy", "color:purple");
  }

  ngDoCheck() {
    console.log("%cDoCheck", "color:pink");
  }

  ngOnChanges() {
    console.log("%c\n\nOnChanges", "color:lime");
  }

  // this is used for <ng-content>
  ngAfterContentInit() {
    console.log("%cAfterContentInit", "color:red");
  }

  ngAfterContentChecked() {
    console.log("%cAfterContentChecked", "color:turquoise");
  }

  // this is used for viewChild /viewChildren
  ngAfterViewInit() {
    console.log("%cAfterViewInit", "color:orange");
  }

  ngAfterViewChecked() {
    console.log("%cAfterViewChecked", "color:orangered");
  }
}

@Component({
  selector: "my-app",
  template: `
    <div class="comps">
      <section>
        <p class="path">/lifecycle/basic-overview/index.ts</p>
        <h4>Basic <strong>Check the Console for LifeCycle Hooks</strong></h4>
      
        <p>
          <a href="http://teropa.info/blog/2016/03/06/writing-an-angular-2-template-directive.html" target="_blank">
            Great article on writing custom logic when things change. (Writing A Structural Directive in Angular 2)
          </a>
        </p>
        
        <input [(ngModel)]="appMessage">
      
        <my-component [message]="appMessage">
          This is content is transposed using &lt;ng-content&gt;: <strong>{{appMessage}}</strong>
        </my-component>
      </section>
    </div>
    
  `
})
export class BasicExample {
  appMessage = "Type message here";
}
