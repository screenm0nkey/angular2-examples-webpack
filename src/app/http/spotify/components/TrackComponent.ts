import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SpotifyService} from '../spotify.service';
import { Observable } from 'rxjs/Observable';

// angular2 doesn't like 'track' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
@Component({
  selector: 'theTrack',
  template: `
    <div *ngIf='track$ | async; let track'>
      <h1>{{ track.name }}</h1>
      <p>
        <img src='{{ track.album.images[1].url }}'>
      </p>
      <p>
        <audio controls src='{{ track.preview_url }}'></audio>
      </p>
      <p><a href (click)='back()'>Back</a></p>
  </div>
  `
})
export class TrackComponent implements OnInit {
  id: string;
  track$: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    public spotify: SpotifyService,
    public location: Location
  ) {
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
