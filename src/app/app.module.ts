import {NgModule} from '@angular/core'
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import {routing} from "./app.routes";
import {AppComponent} from "./app";
import {FormExamplesModule} from "./forms/forms.module";
import {MiscExamplesModule} from "./misc-examples/misc.module";
import {SeedModule} from "./seed/seed.module";
import {HttpRxJsModule} from "./http-rxjs/async.module";
import {EggheadExamplesModule} from './egghead-example/egghead.module';
import {LifeCycleModule} from './lifecycle/lifecycle.module';

// this is for the angular2 services example
import {SomeService, EngineService} from './misc-examples/components/inject/some-service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FormExamplesModule,
    SeedModule,
    MiscExamplesModule,
    HttpRxJsModule,
    EggheadExamplesModule,
    LifeCycleModule
  ],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, //is the equivalent of using <base href="/">
      {provide: LocationStrategy, useClass: HashLocationStrategy},
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
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
