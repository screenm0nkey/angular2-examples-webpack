import {Component} from '@angular/core';

@Component({
  template: `
    <div class='miscellaneous'>
       <nav>
         <a routerLink='./' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Egghead App</a>
          <a routerLink='./seed-app' routerLinkActive='active'>Seed App</a>
          <a routerLink='./auth-app' routerLinkActive='active'>Auth Routing App</a>
          <a routerLink='./redux-chat-app' routerLinkActive='active'>Redux Chat App</a>
          <a routerLink='./customers' routerLinkActive='active'>Customers App</a>
          <a routerLink='./insert-component' routerLinkActive='active'>Reusable Components using TemplateRef</a>
      </nav>
      <div class="ngx-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class MiniAppsComponent {
  constructor() {
  }
}
