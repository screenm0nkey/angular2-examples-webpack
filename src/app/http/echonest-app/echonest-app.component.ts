import { Component } from '@angular/core';
import { MusicSearchService } from './echonest.service';
import { Artist } from './echonest.http';
import { Observable } from 'rxjs';

@Component({
  selector: 'echonest-app',
  providers: [
    MusicSearchService
  ],
  template: `
    <div class='comps clearfix'>
      <section>
        <p class="path">/http-rxjs/echonest-app/echonest-app.ts</p>
        <h4>A not particularly well written RxJs Mini App</h4>
        <a routerLink='/misc/change-detection/'>See change-detection example</a>
        <br>
        <span class='red'>Need to run the www/server for this</span>
        <header>
          Top 100
          <dropdown-component
            [results]='[5,10,17,33,56,100]'
            (select)='service.fetchArtists($event)'>
          </dropdown-component>
        </header>
        <div class='clearfix'>
          <div style='float: left'>
            <artist-component
              *ngFor='let artist of artists$ | async'
              [type]="'all'"
              [artist]='artist'
              (select)='service.onArtistSelected($event)'>
            </artist-component>
          </div>
          <div style='float: right'>
            <artist-component
              *ngFor='let artist of favourites$ | async'
              [type]="'favourite'"
              [artist]='artist'
              (select)='service.onArtistSelected($event)'>
            </artist-component>
          </div>
        </div>
      </section>
    </div>
   `
})
export class MusicSearchAppComponent {
  public artists$: Observable<Artist[]>;
  public favourites$: Observable<Artist[]>;

  constructor(public service: MusicSearchService) {
    this.artists$ = service.getArtists();
    this.favourites$ = service.getFavourites();
  }
}
