import {Component, OnInit, Optional, SkipSelf} from '@angular/core';
import {bloggerFactory, BloggerService} from "./injectables.service";


@Component({
  selector: 'app-person',
  providers: [
    {
      provide: BloggerService,
      useFactory: bloggerFactory('PersonComponent')
    }
  ],
  template: `
    <div style="border:1px;">
      <p *ngIf="blogger === null">I don't have a logger</p>
      <button (click)="doLog()">write log</button>
    </div>
  `
})
export class PersonComponent implements OnInit {
  constructor(
    @SkipSelf()
    // @Host()
    @Optional()
    public blogger: BloggerService
  ) {
  }

  ngOnInit() {
  }

  doLog() {
    if (this.blogger) {
      this.blogger.log('Message from PersonComponent');
    } else {
      console.log('sorry, no logger available');
    }
  }
}

@Component({
  selector: 'app-person-parent',
  template: `
    <p class="path">misc-examples/components/dependency-injection/control-lookup.component.ts</p>
    <h4>@Self, @Host, @SkipSelf and @Optional</h4>
    <div class="links">
      <a href="https://egghead.io/lessons/angular-control-the-dependency-lookup-with-host-skipself-and-optional"
         target="_blank">Control the dependency lookup with @Host, @SkipSelf and @Optional</a>
      <a
        href="https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658"
        target="_blank">
        Guide to DI Decorators
      </a>
      <a
        href="https://blog.angularindepth.com/a-curios-case-of-the-host-decorator-and-element-injectors-in-angular-582562abcf0a"
        target="_blank">
        Indepth guide to @Host
      </a>
    </div>

    <p>Angular now has a hierarchical dependency injector. That allows us to specify
      service definitions as well as the service lifetime at various levels in our application. Whenever a service is
      requested, Angular will walk up the component tree and search for a matching definition. While in most cases
      that's perfectly fine, often you may want to take control over the dependency lookup.
      <code>@Host(), @SkipSelf() and @Optional()</code></p>
    <app-person></app-person>
  `,
  providers: [
    {
      provide: BloggerService,
      useFactory: bloggerFactory('AppComponent')
    }
  ]
})
export class ParentPersonComponent {
}
