import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {SearchComponent} from './components/SearchComponent';
import {ArtistComponent} from './components/ArtistComponent';
import {TrackComponent} from './components/TrackComponent';
import {AlbumComponent} from './components/AlbumComponent';
import {SpotifyDemoApp} from './spotify.component';
import {SPOTIFY_PROVIDERS} from './SpotifyService';
import {routing} from './spotify.routes';


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    SpotifyDemoApp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  providers: [
    SPOTIFY_PROVIDERS
  ]
})
export class SpotifyModule {
}
export {SpotifyDemoApp}

