import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';
import {SomeService, EngineService} from './app/misc-examples/components/inject/some-service';

// enableProdMode()

bootstrap(App, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    // try commenting this out and it reverts to standard urls without hash
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    SomeService,                                        // this is shorthand for provide(SomeService, {useClass : SomeService}),
    {provide: 'whateverToken', useClass: SomeService},  // this is used by "injecting-token.ts" component,
    {provide: 'EngineService', useFactory: () => {      // this is used by "injecting-token.ts" component,
        return () => {
            return new EngineService();
        }
    }}
])
    .catch(err => console.error(err));
