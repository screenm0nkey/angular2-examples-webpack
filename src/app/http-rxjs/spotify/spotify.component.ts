import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
     <div class="spotify-component">
     <p class="path">src/app/http-rxjs/spotify/spotify.component.ts</p>
         <h4>Spotify</h4>
         yes
        <router-outlet></router-outlet>
    </div>
    </div>
  `
})
export class SpotifyDemoApp {
  query: string;
}
