import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SeedApp} from './seed-component/seed-app'
import {EggheadApp} from './egghead-example/main'
import {MiscExamples} from './misc-examples/main'


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
    {path: '/misc/...', component: MiscExamples, name: 'MiscExamples'}
])
export class MainApp {
    constructor() {
    }
}
