import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SeedApp} from './seed-component/seed-app';
import {EggheadApp} from './egghead-example/main';
import {MiscExamples} from './misc-examples/main';
import {HttpExamples} from './http-rxjs/main';
import {FormExamples} from './forms/main';


@Component({
    selector: 'main-app',
    template: require('./app.html'),
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/egghead', component: EggheadApp, name: 'Egghead', useAsDefault: true},
    {path: '/seed/...', component: SeedApp, name: 'SeedApp'},
    {path: '/misc/...', component: MiscExamples, name: 'MiscExamples'},
    {path: '/http', component: HttpExamples, name: 'HttpExamples'},
    {path: '/forms/...', component: FormExamples, name: 'FormExamples'},
])
export class MainApp {
    constructor() {
    }
}
