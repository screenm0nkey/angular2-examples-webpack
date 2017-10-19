import {NgModule} from "@angular/core";
import {StoreModule, Store} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AsyncRoutingModule} from "./async.routes.module";
import {SharedModule} from "../shared/shared.module";
import {MainHttpRxJs} from "./async.component";
import {SearchesModule} from "./searches/searches.module";
import {EchonestModule} from "./echonest-app/echonest.module";
import {JohnLinquistModule} from "./john-linquist/john.module";
import {MiscHttpModule} from "./misc-examples/misc.module";
import {MainApp, NgRxQueueAppComponent} from "./ngrx-queue/main";
import {SpotifyModule} from "./spotify/spotify.module";
import {NgrxClocksModule} from "./ngrx-clock/ngrxclock.module";
import {NgrxInTenModule} from "./ngrx-in-ten/ngrxinten.module";
import {queue} from "./ngrx-queue/reducers";
import {filter, people} from "./ngrx-in-ten/reducers";
import {clock, peoplez, tick} from "./ngrx-clock/reducers";
import {wordsReducer} from "./misc-examples/ngrx-starter";
import {UnitEffects} from "./ngrx-queue/effects";

@NgModule({
  imports: [
    SharedModule,
    AsyncRoutingModule,
    SpotifyModule,
    SearchesModule,
    EchonestModule,
    JohnLinquistModule,
    MiscHttpModule,
    NgrxClocksModule,
    NgrxInTenModule,
    Store, StoreModule.forRoot({queue, people, filter, tick, clock, peoplez, wordsReducer}),
    EffectsModule.forFeature([UnitEffects]),
  ],
  declarations: [
    MainHttpRxJs,
    MainApp,
    NgRxQueueAppComponent
  ]
})
export class HttpRxJsModule {
}
