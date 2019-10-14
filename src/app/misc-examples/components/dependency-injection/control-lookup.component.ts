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
        <external-link [id]="62"></external-link>
        <external-link [id]="63"></external-link>
        <external-link [id]="60"></external-link>
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
      useFactory: bloggerFactory('Ng6SocketAppComponent')
    }
  ]
})
export class ParentPersonComponent {
}
