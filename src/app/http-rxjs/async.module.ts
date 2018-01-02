import { NgModule } from "@angular/core";
import { AsyncRoutingModule } from "./async.routes.module";
import { SharedModule } from "../shared/shared.module";
import { MainHttpRxJs } from "./async.component";
import { SearchesModule } from "./searches/searches.module";
import { EchonestModule } from "./echonest-app/echonest.module";
import { JohnLinquistModule } from "./john-linquist/john.module";
import { MiscHttpModule } from "./misc-examples/misc.module";
import { NgRxQueueMainApp, NgRxQueueAppComponent } from "./ngrx-queue/main";
import { SpotifyModule } from "./spotify/spotify.module";
//NGRX
import { StoreModule } from "@ngrx/store";
import { NgrxClocksModule } from "./ngrx-clock/ngrxclock.module";
import { NgrxInTenModule } from "./ngrx-in-ten/ngrxinten.module";
import { queue } from "./ngrx-queue/reducers";
import { wordsReducer } from "./misc-examples/ngrx-starter";
import { clock, peoplez, tick } from "./ngrx-clock/reducers";
import { filter, people } from "./ngrx-in-ten/reducers";
import { UnitEffects } from "./ngrx-queue/effects";
import { EffectsModule } from "@ngrx/effects";

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
    StoreModule.forRoot({
      queue,
      people,
      filter,
      tick,
      clock,
      peoplez,
      wordsReducer
    }),
    EffectsModule.forRoot([UnitEffects])
  ],
  declarations: [MainHttpRxJs, NgRxQueueMainApp, NgRxQueueAppComponent]
})
export class HttpRxJsModule {}
