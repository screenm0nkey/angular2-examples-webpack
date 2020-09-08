import { Component } from '@angular/core';

@Component({
  template: `
    <div class='comps'>
     <div class='spotify-component'>
     <p class="path">http-rxjs/spotify/spotify.component.ts</p>
         <h4>Spotify</h4>
        <router-outlet></router-outlet>
    </div>
    </div>
  `
})
export class SpotifyDemoApp {
  query: string;
}
