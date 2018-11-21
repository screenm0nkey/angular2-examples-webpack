import {Component} from '@angular/core';
import {EchonestService} from './echonest.service';
import {EchonestArtistCardComponent} from './echonest-artist-card.component';

@Component({
  selector: 'echonest-search-component',
  providers: [EchonestService],
  template: `
    <div class='search-results'>
      <p class='path'>/http-rxjs/searches/echonest-search.ts</p>
      <h4>Song Search example using <strong>input[type=text][autosearch]</strong> directive</h4>
      
      <p>Type a search word i.e. 'st' (needs the www-server running)</p>
      <input 
        type='text' 
        autosearch 
        (results)='setArtists($event)' 
        placeholder='Echonest Search'>
      
      <div *ngIf='artists'>
          <div *ngFor='let artist of artists'>
              <artist-card [artist]='artist'></artist-card>
          </div>
      </div>
    </div>
	`
})
export class EchonestSearchComponent {
  artists: EchonestArtistCardComponent[];

  setArtists(artists) {
    if (Array.isArray(artists)) {
      this.artists = artists;
    }
  }
}
