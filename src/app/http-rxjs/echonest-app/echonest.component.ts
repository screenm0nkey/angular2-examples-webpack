import { Component } from "@angular/core";
import { EchonestService } from "./echonest.service";
import { Artist } from "./echonest.repo";
import { Observable } from "rxjs";

@Component({
  selector: "echonest-app",
  providers: [
    // provide(RequestOptions, {useClass: MyOptions})
    EchonestService
  ],
  template: `
        <p class="path">/http-rxjs/echonest-app/echonest-app.ts</p>
        <h4>A not particularly well written RxJs Mini App</h4>
        <a routerLink="/misc/change-detection/">See change-detection example</a>
        <br>
        <span class="red">Need to run the www/server for this</span>
        <header>
            Top 100 
            <dropdown-component 
                [results]="[5,15,30,50,100]" 
                (select)="service.fetchArtists($event)">
            </dropdown-component>
        </header>
        <div style="clear: both">
          <div style="float: left">
            <artist-component 
              *ngFor="let artist of artists$ | async" 
              [type]="'all'"
              [artist]="artist" 
              (select)="service.onArtistSelected($event)">
            </artist-component>
          </div>
          <div style="float: right">
            <artist-component 
              *ngFor="let artist of favourites$ | async" 
              [type]="'favourite'"
              [artist]="artist"
              (select)="service.onArtistSelected($event)">
             </artist-component>
          </div>
        </div>
    `
})
export class EchonestAppComponent {
  private artists$: Observable<Artist[]>;
  private favourites$: Observable<Artist[]>;

  constructor(private service: EchonestService) {
    this.artists$ = service.getArtists();
    this.favourites$ = service.getFavourites();
  }
}
