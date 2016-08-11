import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PLATFORM_PIPES } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';

// this is for the angular2 services example
import {SomeService, EngineService} from './app/misc-examples/components/inject/some-service';

// these are for the ngrx queue example (#/httprx/ngrx-queue)
// tried loading them as local dependencies but runEffects() didn't work
import {UnitEffects} from './app/http-rxjs/ngrx-queue/effects';
import {provideStore} from '@ngrx/store';
import {runEffects} from '@ngrx/effects';
import {queue} from './app/http-rxjs/ngrx-queue/reducers';

import {CapitalizePipe} from './app/egghead-example/pipes/capitilize-pipe';

// enableProdMode()

bootstrap(App, [
  // ngrx
  provideStore({queue}),
  runEffects(UnitEffects),
  // forms
  disableDeprecatedForms(),
  provideForms(),
  // default providers
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  // adding a global pipe example
  {provide: PLATFORM_PIPES, useValue: CapitalizePipe, multi: true},

  // loading dependencies example
  SomeService,                                        // this is shorthand for provide(SomeService, {useClass : SomeService}),
  {provide: 'whateverToken', useClass: SomeService},  // this is used by "injecting-token.ts" component,
  {
    provide: 'EngineService', useFactory: () => {      // this is used by "injecting-token.ts" component,
    return () => {
      return new EngineService();
    }
  }
  }
])
  .catch(err => console.error(err));
