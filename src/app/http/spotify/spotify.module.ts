import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/_shared.module';
import {SearchComponent} from './components/SearchComponent';
import {ArtistComponent} from './components/ArtistComponent';
import {TrackComponent} from './components/TrackComponent';
import {AlbumComponent} from './components/AlbumComponent';
import {SpotifyDemoApp} from './spotify.component';
import {SPOTIFY_PROVIDERS} from './spotify.service';
import {SpotifyRoutingModule} from "./spotify.routes.module";

@NgModule({
  imports: [
    SharedModule,
    SpotifyRoutingModule
  ],
  declarations: [
    SpotifyDemoApp,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  providers: [SPOTIFY_PROVIDERS]
})
export class SpotifyModule {
}

export {SpotifyDemoApp};
