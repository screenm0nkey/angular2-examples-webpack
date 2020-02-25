import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'artist-card',
  encapsulation: ViewEncapsulation.ShadowDom, // this makes it a real web component
  template: `<pre>{{artist.label}}</pre>`
})
export class MusicSearchArtistCardComponent {
  @Input() artist: any;
}
