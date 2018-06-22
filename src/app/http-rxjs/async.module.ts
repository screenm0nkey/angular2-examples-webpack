import { NgModule } from "@angular/core";
import { AsyncRoutingModule } from "./async.routes.module";
import { SharedModule } from "../shared/shared.module";
import { MainHttpRxJs } from "./async.component";
import { SearchesModule } from "./searches/searches.module";
import { EchonestModule } from "./echonest-app/echonest.module";
import { JohnLinquistModule } from "./john-linquist/john.module";
import { MiscHttpModule } from "./misc-examples/misc.module";
import { SpotifyModule } from "./spotify/spotify.module";
//NGRX
import { StoreModule } from "@ngrx/store";
import { NgrxModule } from "./ngrx/ngrx.module";
import { queue , peoplez, tick, people, filter, unit, clock} from "./ngrx/reducers/reducer.service";
import { wordsReducer } from "./misc-examples/ngrx-starter";
import { UnitEffects } from "./ngrx/ngrx-queue/effects";
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
    NgrxModule,
    StoreModule.forRoot({
      unit,
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
  declarations: [MainHttpRxJs]
})
export class HttpRxJsModule {}
