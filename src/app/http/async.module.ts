import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/_shared.module';
import {AsyncRoutingModule} from './async.routes.module';
import {MiscHttpModule as RxJsExamplesModule} from './rxjs-examples/_rxjs-examples.module';
import {MainHttpRxJs} from './async.component';
import {MusicSearchModule} from './echonest-app/echonest.module';
import {SearchesModule} from './searches/_searches.module';
import {SpotifyModule} from './spotify/spotify.module';
import {ChatAppRxJsModule} from './chat-app-rxjs/ts/app.module';
// import {NgrxModule} from './ngrx/_ngrx.module';

@NgModule({
  imports: [
    SharedModule,
    AsyncRoutingModule,
    RxJsExamplesModule,
    SharedModule,
    AsyncRoutingModule,
    ChatAppRxJsModule,
    SpotifyModule,
    SearchesModule,
    MusicSearchModule,
    RxJsExamplesModule,
    // NgrxModule
  ],
  exports: [],
  declarations: [MainHttpRxJs],
  providers: []
})
export class HttpRxJsModule {
}
