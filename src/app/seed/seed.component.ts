import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3>
      Angular 2 Seed
    </h3>
    <nav>
      <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a> |
      <a routerLink="about" routerLinkActive="active">About</a> |
      <a [routerLink]="['github', 'angular']" routerLinkActive="active">Github Repos</a>
    </nav>
    
    <main>
      <router-outlet></router-outlet>
    </main>
    
    <footer style="clear: both">
      Footer © 2016
    </footer>
  `,
})
export class SeedComponent {
}
