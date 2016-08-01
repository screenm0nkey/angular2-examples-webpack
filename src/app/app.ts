import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'main-app',
    directives: [ROUTER_DIRECTIVES],
    styles: [
        require('../styles/app.css'),
        require('../styles/main.css')
    ],
    template: `
        <nav>
            <a [routerLink]="['/form']" [routerLinkActive]="['active']">Forms</a>
            <a [routerLink]="['/seed']" [routerLinkActive]="['active']">Seed SeedApp</a>
            <a [routerLink]="['/egghead']" [routerLinkActive]="['active']">Egghead</a>
            <a [routerLink]="['/lifecycle']" [routerLinkActive]="['active']">Lifecycle</a>
            <a [routerLink]="['/misc']" [routerLinkActive]="['active']">Miscellaneous</a>
            <a [routerLink]="['/httprx']" [routerLinkActive]="['active']">Http and RxJs</a>
        </nav>
        
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    encapsulation: ViewEncapsulation.None
})
export class App {
    constructor() {
    }

}
