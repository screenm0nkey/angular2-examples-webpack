import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {routing} from './async.routes';
import {SharedModule} from '../shared/shared.module';
import {MainHttpRxJs} from './async.component'
import {SearchesModule} from './searches/searches.module';
import {EchonestModule} from './echonest-app/echonest.module';
import {JohnLinquistModule} from './john-linquist/john.module';
import {MiscHttpModule} from './misc-examples/misc.module';
import {NgrxClocksModule} from './ngrx-clock/ngrxclock.module';
import {NgrxInTenModule} from './ngrx-in-ten/ngrxinten.module';
import {MainApp, NgRxQueueAppComponent} from './ngrx-queue/main';
import {SpotifyModule} from './spotify/spotify.module';
import {queue} from './ngrx-queue/reducers';
import {UnitEffects} from './ngrx-queue/effects';
import {people, filter} from "./ngrx-in-ten/reducers";
import {clock, peoplez, tick} from './ngrx-clock/reducers';

@NgModule({
  imports: [
    routing,
    SharedModule,
    SearchesModule,
    EchonestModule,
    JohnLinquistModule,
    MiscHttpModule,
    NgrxClocksModule,
    NgrxInTenModule,
    SpotifyModule,
    StoreModule.provideStore({queue, people, filter, tick, clock, peoplez}),
    EffectsModule.run(UnitEffects)
  ],
  declarations: [
    MainHttpRxJs,
    MainApp,
    NgRxQueueAppComponent
  ]
})
export class HttpRxJsModule {
}
