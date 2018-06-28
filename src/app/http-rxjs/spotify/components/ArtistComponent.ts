/*
 * Angular
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Rx";
/*
 * Services
 */
import { SpotifyService } from "../spotify.service";

@Component({
  selector: "artist$",
  template: `
  <div *ngIf="(artist$ | async)?.name">
    <h1>{{ (artist$ | async)?.name }}</h1>
    <p>
      <img src="{{ (artist$ | async)?.images[0].url }}">
    </p>
    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class ArtistComponent implements OnInit {
  id: string;
  artist$: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private location: Location
  ) {
    route.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.artist$ = this.spotify.getArtist(this.id);
  }

  back(): void {
    this.location.back();
  }
}
