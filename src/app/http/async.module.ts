import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/_shared.module';
import {AsyncRoutingModule} from './async.routes.module';
import {MiscHttpModule} from './misc-examples/misc.module';
import {MainHttpRxJs} from './async.component';
import {JohnLinquistModule} from './john-linquist/index.module';
import {EchonestModule} from './echonest-app/echonest.module';
import {SearchesModule} from './searches/searches.module';
import {SpotifyModule} from './spotify/spotify.module';
import {ChatAppRxJsModule} from './chat-app-rxjs/ts/app.module';
import {NgrxModule} from './ngrx/_ngrx.module';

@NgModule({
  imports: [
    SharedModule,
    AsyncRoutingModule,
    MiscHttpModule,
    SharedModule,
    AsyncRoutingModule,
    ChatAppRxJsModule,
    SpotifyModule,
    SearchesModule,
    EchonestModule,
    JohnLinquistModule,
    MiscHttpModule,
    NgrxModule
  ],
  exports: [],
  declarations: [MainHttpRxJs],
  providers: []
})
export class HttpRxJsModule {
}
