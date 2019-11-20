import {Component, OnInit, Optional, SkipSelf, Injectable} from '@angular/core';

@Injectable({ providedIn: "root" })
export class BloggerService {
  constructor(private prefix: string) {}

  log(msg: string) {
    console.log(`Slogger (${this.prefix}): ${msg}`);
  }
}

export const bloggerFactory = (prefix): Function => {
  return () => new BloggerService(prefix);
};

/**
 * 
 */
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

/**
 * 
 */
@Component({
  selector: 'app-person-parent',
  template: `
    <collapse-it>
        <p class="path">misc-examples/components/dependency-injection/control-lookup.component.ts</p>
        <h4>@Self, @Host, @SkipSelf and @Optional</h4>
        <div class="links">
            <dlink [id]="62"></dlink>
            <dlink [id]="63"></dlink>
            <dlink [id]="60"></dlink>
        </div>

        <p>Angular now has a hierarchical dependency injector. That allows us to specify
            service definitions as well as the service lifetime at various levels in our application. Whenever a service is
            requested, Angular will walk up the component tree and search for a matching definition. While in most cases
            that's perfectly fine, often you may want to take control over the dependency lookup.
            By default Angular will first check if the component defines a dependency injector in its decorator.
            <br/><strong>@Host</strong> will force the lookup to only go as far as this host component.
            <br/><strong>@SkipSelf</strong>will mean the component is skipped, so if it provides the service in the component, it won't be used
            <br/><strong>@Optional</strong> means if no service can be found then a null will be returned rather than a JS error
            <code>constructor(@SkipSelf() @Optional() public blogger:BloggerService)</code></p>
        <app-person></app-person>
    </collapse-it>
  `,
  providers: [
    {
      provide: BloggerService,
      useFactory: bloggerFactory('Ng6SocketAppComponent')
    }
  ]
})
export class ParentPersonComponent {
  constructor(public blogger: BloggerService) {
  }
}
