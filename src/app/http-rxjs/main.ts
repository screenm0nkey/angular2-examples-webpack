import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink, Router} from '@angular/router-deprecated';
import {HttpExamples} from './searches/main';
import {
    EchonestFavStoreService,
    EchonestService,
    EchonestArtistStoreService,
    EchonestAppComponent
} from './echonest-app/echonest-app';
import {MainClocks} from './ngrx-clock/main';
import {MiscHttpExamples} from './misc-examples/main';
import {NgRxInTenMinsComponent} from './ngrx-in-ten/main';


@Component({
    selector: 'app-component',
    styles: [require('../../styles/layout.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        // provide(RequestOptions, {useClass: MyOptions})
        EchonestFavStoreService,
        EchonestService,
        EchonestArtistStoreService
    ],
    template: `
    <div class="miscellaneous">
        <nav>
            <a [routerLink]="['/MainHttpRxJs/HttpExamples']" class="router-link">Http/RxJs Searches</a>
            <a [routerLink]="['/MainHttpRxJs/MiscHttpExamples']" class="router-link">Http/RxJs Misc Examples</a>
            <a [routerLink]="['/MainHttpRxJs/EchonestAppComponent']" class="router-link">Echonest RxJs</a>
            <a [routerLink]="['/MainHttpRxJs/NgRxClockApp']" class="router-link">NgRx Clock App</a>
            <a [routerLink]="['/MainHttpRxJs/NgRxInTen']" class="router-link">NgRx in ten minutes</a>
        </nav>
        <div id="container">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
})
@RouteConfig([
    {path: '/http-examples', name: 'HttpExamples', component: HttpExamples, useAsDefault: true},
    {path: '/misc-examples', name: 'MiscHttpExamples', component: MiscHttpExamples},
    {path: '/echonest-app', name: 'EchonestAppComponent', component: EchonestAppComponent},
    {path: '/ngrx', as: 'NgRxClockApp', component: MainClocks},
    {path: '/ngrx-in-ten', as: 'NgRxInTen', component: NgRxInTenMinsComponent},
])
export class MainHttpRxJs {
    constructor() {
        console.log(this);
    }
}


