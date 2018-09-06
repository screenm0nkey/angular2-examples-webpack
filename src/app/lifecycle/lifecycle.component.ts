import { Component } from "@angular/core";

// does not require a selector as its loaded by router
@Component({
  template: `
    <div class="miscellaneous">
            <nav>
                <a routerLink="./misc" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Miscellaneous examples</a>
                <a routerLink="./basic" routerLinkActive="active">Basic</a>
                <a routerLink="./peekaboo" routerLinkActive="active">Peekaboo</a>
                <a routerLink="./spy" routerLinkActive="active">Spy</a>
                <a routerLink="./on-changes" routerLinkActive="active">OnChanges</a>
                <a routerLink="./after-view" routerLinkActive="active">AfterView</a>
                <a routerLink="./after-content" routerLinkActive="active">AfterContent</a>
            </nav>
            <div id="container">
                <router-outlet></router-outlet>
            </div>
        </div>   
`
})
export class LifeCycleMainComponent {}
