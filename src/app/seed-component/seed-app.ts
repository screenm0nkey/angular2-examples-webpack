import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home/home';
import {About} from './about/about';
import {RepoBrowser} from './repo-browser/repo-browser';

@Component({
    selector: 'seed-app',
    styles: [require('./seed-app.css')],
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES],
    template: require('./seed-app.html'),
})
@RouteConfig([
    {path: '/home', component: Home, name: 'Home', useAsDefault: true},
    {path: '/about', component: About, name: 'About'},
    {path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'},
])
export class SeedApp {
    constructor() {
    }
}
