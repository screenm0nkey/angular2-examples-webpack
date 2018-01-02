import { Component } from "@angular/core";

@Component({
  template: `
     <div class="spotify-component">
         <h4>Spotify</h4>
         yes
        <router-outlet></router-outlet>
    </div>
  `
})
export class SpotifyDemoApp {
  query: string;
}
