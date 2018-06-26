import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "artist-card",
  encapsulation: ViewEncapsulation.Native, // this makes it a real web components
  template: `<pre>{{artist.label}}</pre>`
})
export class EchonestArtistCardComponent {
  @Input() artist: Object;
}
