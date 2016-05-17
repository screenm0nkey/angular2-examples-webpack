import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink, Router} from '@angular/router-deprecated';
import {HttpExamples} from './http/main';
import {EchonestFavStoreService, EchonestService, EchonestArtistStoreService, EchonestAppComponent} from './echonest-app/echonest-app';
import {MainClocks} from './ngrx-clock/main';

@Component({
    selector: 'app-component',
    styles: [require('./main.css')],
    directives: [
        ROUTER_DIRECTIVES,
        EchonestAppComponent
    ],
    providers: [
        // provide(RequestOptions, {useClass: MyOptions})
        EchonestFavStoreService,
        EchonestService,
        EchonestArtistStoreService
    ],
    template: `
    <div class="miscellaneous">
        <nav>
            <a [routerLink]="['/MainHttpRxJs/HttpExamples']" class="router-link">Http/RxJs Examples</a>
            <a [routerLink]="['/MainHttpRxJs/EchonestAppComponent']" class="router-link">Echonest RxJs</a>
            <a [routerLink]="['/MainHttpRxJs/NgRxClockApp']" class="router-link">NgRx Clock App</a>
        </nav>
        <div id="container">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
})
@RouteConfig([
    {path: '/http-examples', name: 'HttpExamples', component: HttpExamples, useAsDefault: true},
    {path: '/echonest-app', name: 'EchonestAppComponent', component: EchonestAppComponent},
    {path: '/ngrx', as: 'NgRxClockApp', component: MainClocks},
])
export class MainHttpRxJs {
    constructor() {
        console.log(this);
    }
}


