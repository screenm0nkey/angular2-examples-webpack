import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./seed-component.css'],
  template: `
    <div class='comps' style="border:solid 2px violet">
      <nav style='max-width: 500px;position: absolute;top: -55px;'>
        <a routerLink='./home' routerLinkActive='active' [routerLinkActiveOptions]='{ exact: true }'>Home</a> |
        <a routerLink='about' routerLinkActive='active'>About</a> |
        <a [routerLink]="['github', 'angular']" routerLinkActive='active'>Github Repos</a>
      </nav>
      <section>
        <p class="path">seed-component/seed.component.ts (border violet)</p>
        <h4>Angular 2 Seed</h4>
        
        <main class='clearfix'>
          <router-outlet></router-outlet>
        </main>
        
        <footer style='clear: both; border:solid 2px;'>
          Footer © 2016
        </footer>
      </section>
    </div>
  `
})
export class SeedComponent {
}
