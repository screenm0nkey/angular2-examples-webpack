import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AsyncRoutingModule} from './async.routes.module';
import {MiscHttpModule} from './misc-examples/misc.module';
import {WikiSearchService} from './searches/wikipedia-search.service';
import {MainHttpRxJs} from './async.component';
import {JohnLinquistModule} from './john-linquist/index.module';
import {EchonestModule} from './echonest-app/echonest.module';
import {SearchesModule} from './searches/searches.module';
import {SpotifyModule} from './spotify/spotify.module';
import {ChatAppRxJsModule} from './chat-app-rxjs/ts/app.module';

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
  ],
  exports: [],
  declarations: [MainHttpRxJs],
  providers: [WikiSearchService]
})
export class HttpRxJsModule {
}
