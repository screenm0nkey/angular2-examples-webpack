import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/SearchComponent';
import {ArtistComponent} from './components/ArtistComponent';
import {TrackComponent} from './components/TrackComponent';
import {AlbumComponent} from './components/AlbumComponent';
import {SpotifyDemoApp} from './spotify.module';


const routes: Routes = [
  {
    path: 'httprx/spotify',
    component: SpotifyDemoApp,
    children: [
      {path: '', redirectTo: 'search', pathMatch: 'full'},
      {path: 'search', component: SearchComponent},
      {path: 'artists/:id', component: ArtistComponent},
      {path: 'tracks/:id', component: TrackComponent},
      {path: 'albums/:id', component: AlbumComponent},
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
