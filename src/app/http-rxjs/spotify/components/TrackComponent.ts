import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {SpotifyService} from "../SpotifyService";


// angular2 doesn't like 'track' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
@Component({
  selector: 'theTrack',
  template: `
  <div *ngIf="(track$ | async)?.album">
    <h1>{{ track$.name }}</h1>
    <p>
      <img src="{{ (track$ | async)?.album.images[1].url }}">
    </p>
    <p>
      <audio controls src="{{ (track$ | async)?.preview_url }}"></audio>
    </p>
    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class TrackComponent implements OnInit {
  id: string;
  track$: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.track$ = this.spotify.getTrack(this.id);
  }

  back(): void {
    this.location.back();
  }
}
