import {Component, Injectable, Input} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {EchonestService} from "./echonest.service"
import {Artist} from "./echonest.repo";


@Component({
  selector: 'echonest-app',
  providers: [
    // provide(RequestOptions, {useClass: MyOptions})
    EchonestService,
  ],
  template: `
        <p class="file">src/app/http-rxjs/echonest-app/echonest-app.ts</p>
        <h4>A not particularly well written RxJs Mini App</h4>
        <span style="color: red;">Need to run the www/server for this</span>
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
              *ngFor="let artist of favourites" 
              [type]="'favourite'"
              [artist]="artist">
             </artist-component>
          </div>
        </div>
        
    `
})
export class EchonestAppComponent {
  private artists$: Observable<Artist[]>;
  private favourites: Artist[];

  constructor(private service:EchonestService){
    this.artists$ = service.artists$;
    this.artists$.subscribe((artists:Artist[])=>{
      this.favourites = artists.filter((artist:Artist)=>artist.favourited)
    });
  }

}
