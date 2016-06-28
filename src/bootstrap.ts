import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from "@angular/common";

import {MainApp} from './app/app';
import {SomeService, EngineService} from './app/misc-examples/components/inject/some-service';

bootstrap(MainApp, [
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    {provide : LocationStrategy, useClass: HashLocationStrategy},// try commenting this out and it reverts to standard urls without hash
    SomeService,                                        // this is shorthand for provide(SomeService, {useClass : SomeService}),
    {provide: 'whateverToken', useClass: SomeService},  // this is used by "injecting-token.ts" component,
    {provide: 'EngineService', useFactory: () => {      // this is used by "injecting-token.ts" component,
            return () => {
                return new EngineService();
            }
        }
    }
]).then(
    success => console.log('MainHttpRxJs bootstrapped!'),
    error => console.log(error)
);

