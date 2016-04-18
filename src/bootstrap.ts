import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { FORM_PROVIDERS } from "angular2/common";

import {MainApp} from './app/app';
import {SomeService, EngineService} from './app/misc-examples/components/inject/some-service';

bootstrap(MainApp, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    SomeService, //this is the same as provide(SomeService, {useClass : SomeService}),
    provide(LocationStrategy, {useClass : HashLocationStrategy}),// try commenting this out and it reverts to standard urls without hash
    provide('whateverToken', {useClass : SomeService }), // this is used by "injecting-token.ts" component,
    provide('EngineService', { useFactory: () => {         // this is used by "injecting-token.ts" component,
        return () => {
            return new EngineService();
        }
    }})
]).then(
    success => console.log('HttpExamples bootstrapped!'),
    error => console.log(error)
);

