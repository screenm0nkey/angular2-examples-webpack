import {provideRouter, RouterConfig} from '@angular/router';
import formRoutes, {FormExamplesMain} from './forms/main';
import seedRoutes, {SeedApp} from './seed-component/app';
import {EggheadApp} from './egghead-example/main';
import lifecycleRoutes, {LifecycleMain} from './lifecycle/main';
import miscRoutes, {MiscExamples} from './misc-examples/main';
import httprxRoutes, {MainHttpRxJs} from './http-rxjs/main';


const routes:RouterConfig = [
    {path: '', redirectTo: 'form', terminal: true},
    {path: 'form', component: FormExamplesMain, children: formRoutes},
    {path: 'seed', component: SeedApp, children: seedRoutes},
    {path: 'egghead', component: EggheadApp},
    {path: 'lifecycle', component: LifecycleMain, children: lifecycleRoutes},
    {path: 'misc', component: MiscExamples, children: miscRoutes},
    {path: 'httprx', component: MainHttpRxJs, children: httprxRoutes}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
