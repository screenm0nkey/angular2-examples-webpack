/*
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
/*
 * Services
 */
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'album$',
  template: `
  <div *ngIf='(album$ | async)?.name'>
    <h1>{{ (album$ | async)?.name }}</h1>
    <h2>{{ (album$ | async)?.artists[0].name }}</h2>

    <p>
      <img src='{{ (album$ | async)?.images[1].url }}'>
    </p>

    <h3>Tracks</h3>
    <ol>
      <li *ngFor='let t of (album$ | async)?.tracks.items'>
        <a [routerLink]="['/httprx','spotify', 'tracks', t.id]'>
          {{ t.name }}
        </a>
      </li>
    </ol>

    <p><a href (click)='back()'>Back</a></p>
  </div>
  `
})
export class AlbumComponent implements OnInit {
  id: string;
  album$: Object;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService, // <-- injected
    private location: Location
  ) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.album$ = this.spotify.getAlbum(this.id);
  }

  back(): void {
    this.location.back();
  }
}
