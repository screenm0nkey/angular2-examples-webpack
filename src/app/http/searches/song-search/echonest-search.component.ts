import { Component } from '@angular/core';
import { MusicSearchService } from './echonest.service';
import { MusicSearchArtistCardComponent } from './echonest-artist-card.component';

@Component({
  selector: 'echonest-search-component',
  providers: [MusicSearchService],
  template: `
    <div class='search-results'>
      <p class="path">/http-rxjs/searches/echonest-search.ts</p>
      <h4>Song Search example using <highlight>input[type=text][musicsearch]</highlight> directive</h4>
      
      <p>Type a search word i.e. 'st' (needs the www-server running)</p>
      <input 
        type='text' 
        musicsearch 
        (results)='setArtists($event)' 
        placeholder='MusicSearch Search'>
      
      <div *ngIf='artists'>
          <div *ngFor='let artist of artists'>
              <artist-card [artist]='artist'></artist-card>
          </div>
      </div>
    </div>
	`
})
export class MusicSearchComponent {
  artists: MusicSearchArtistCardComponent[];

  setArtists(artists) {
    if (Array.isArray(artists)) {
      this.artists = artists;
    }
  }
}
