import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import routes from './routes'


@Component({
    styles: [require('../../styles/layout.css')],
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="miscellaneous">
        <nav>
            <a [routerLink]="['/httprx', 'http-examples']" [routerLinkActive]="['active']">Http/RxJs Searches</a>
            <a [routerLink]="['/httprx', 'john-linquist']" [routerLinkActive]="['active']">John Linquist</a>
            <a [routerLink]="['/httprx', 'misc-examples']" [routerLinkActive]="['active']">Http/RxJs Misc Examples</a>
            <a [routerLink]="['/httprx', 'echonest-app']" [routerLinkActive]="['active']">Echonest RxJs</a>
            <a [routerLink]="['/httprx', 'ngrx']" [routerLinkActive]="['active']">NgRx Clock App</a>
            <a [routerLink]="['/httprx', 'ngrx-in-ten']" [routerLinkActive]="['active']">NgRx in ten minutes</a>
            <a [routerLink]="['/httprx', 'ngrx-queue']" [routerLinkActive]="['active']">NgRx Queue</a>
        </nav>
        <div id="container">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
})
export class MainHttpRxJs {}
export default routes;


