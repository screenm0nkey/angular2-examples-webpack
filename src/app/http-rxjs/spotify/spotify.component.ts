import {Component} from '@angular/core';

@Component({
  selector: 'spotify-app',
  template: `
    <h4>Spot</h4>
     <router-outlet></router-outlet>
  `
})
export class SpotifyDemoApp {
  query: string;
}


