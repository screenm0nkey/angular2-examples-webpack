import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {SeedApp} from './seed-component/seed-app';
import {EggheadApp} from './egghead-example/main';
import {MiscExamples} from './misc-examples/main';
import {MainHttpRxJs} from './http-rxjs/main';
import {FormExamples} from './forms/main';
import {LifecycleMain} from './lifecycle/main';
import {RouterMainComponent} from './router/main';


@Component({
    selector: 'main-app',
    template: require('./app.html'),
    styles : [require('../styles/app.css'), require('../styles/main.css')],
    encapsulation: ViewEncapsulation.None,
    providers: [],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/egghead', component: EggheadApp, name: 'Egghead', useAsDefault: true},
    {path: '/seed/...', component: SeedApp, name: 'SeedApp'},
    {path: '/misc/...', component: MiscExamples, name: 'MiscExamples'},
    {path: '/http/...', component: MainHttpRxJs, name: 'MainHttpRxJs'},
    {path: '/forms/...', component: FormExamples, name: 'FormExamples'},
    {path: '/lifecycle/...', component: LifecycleMain, name: 'Lifecycle'},
    {path: '/router', component: RouterMainComponent, name: 'RouterExamples'},
])
export class MainApp {
    constructor() {
    }
}
