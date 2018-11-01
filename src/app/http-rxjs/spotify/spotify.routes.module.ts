import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/SearchComponent';
import {ArtistComponent} from './components/ArtistComponent';
import {TrackComponent} from './components/TrackComponent';
import {AlbumComponent} from './components/AlbumComponent';
import {SpotifyDemoApp} from "./spotify.component";

const spotifyRoutes: Routes = [
  {
    path: '',
    component: SpotifyDemoApp,
    children: [
      {
        path: '',
        children: [
          {path: '', component: SearchComponent},
          {path: 'artists/:id', component: ArtistComponent},
          {path: 'tracks/:id', component: TrackComponent},
          {path: 'albums/:id', component: AlbumComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(spotifyRoutes)]
})
export class SpotifyRoutingModule {
}
