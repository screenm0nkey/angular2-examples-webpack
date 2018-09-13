import { NgModule } from "@angular/core";
import { AsyncRoutingModule } from "./async.routes.module";
import { SharedModule } from "../shared/shared.module";
import { MainHttpRxJs } from "./async.component";
import { SearchesModule } from "./searches/searches.module";
import { EchonestModule } from "./echonest-app/echonest.module";
import { JohnLinquistModule } from "./john-linquist/index.module";
import { MiscHttpModule } from "./misc-examples/misc.module";
import { SpotifyModule } from "./spotify/spotify.module";
import { ChatAppRxJsModule } from "./chat-app-rxjs/ts/app.module";
//NGRX
// import { StoreModule } from "@ngrx/store";
// import { NgrxModule } from "./ngrx/ngrx.module";
// import { queue , peoplez, tick, people, filter, unit, clock, wordsReducer} from "./ngrx/reducers/reducer.service";
// import { UnitEffects } from "./ngrx/ngrx-queue/effects";
// import { EffectsModule } from "@ngrx/effects";
import {WikiSearchService} from "./searches/wikipedia-search.service";

@NgModule({
  imports: [
    SharedModule,
    AsyncRoutingModule,
    ChatAppRxJsModule,
    SpotifyModule,
    SearchesModule,
    EchonestModule,
    JohnLinquistModule,
    MiscHttpModule,
    /*ngrx
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
    ngrx-end*/
  ],
  declarations: [MainHttpRxJs],
  providers: [WikiSearchService]
})
export class HttpRxJsModule {}
