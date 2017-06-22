import {Component} from "@angular/core";

// does not require a selector as its loaded by router
@Component({
  template: `
    <div class="miscellaneous">
            <nav>
                <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Basic example</a>
                <a routerLink="./peekaboo">Peekaboo</a>
                <a routerLink="./spy">Spy</a>
                <a routerLink="./on-changes">OnChanges</a>
                <a routerLink="./after-view">AfterView</a>
                <a routerLink="./after-content">AfterContent</a>
            </nav>
            <div id="container">
                <router-outlet></router-outlet>
            </div>
        </div>   
`,
})
export class LifeCycleMainComponent {
}


