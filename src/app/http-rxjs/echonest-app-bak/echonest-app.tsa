import {Component, Injectable, Input} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/do";
import "rxjs/add/operator/combineLatest";
import {EchonestService} from "../echonest-app/echonest.service";
import {Artist} from "../echonest-app/echonest.repo";


/*
 * Deals with streams of data related to the favourites$
 * */
@Injectable()
export class EchonestFavStoreService {
  favourites$: ReplaySubject<any> = new ReplaySubject(1); // favourites$:ReplaySubject<Artist[]>
  addFavSubject$: Subject<any> = new Subject<any>();
  removeFavSubject$: Subject<any> = new Subject<any>();
  removeAllSubject$: Subject<any> = new Subject<any>();
  updatesSubject$: Subject<any> = new Subject<any>();
  initialState: Array<Artist> = [];

  constructor() {
    this.favourites$.next([]);

    this.updatesSubject$
      .scan((artistsAccumulator: Artist[], operation: Function) => {
        return operation(artistsAccumulator);
      }, this.initialState)
      .subscribe(this.favourites$);

    this.addFavSubject$
      .do(x => console.log('AddFav', x))
      .map((artist: Artist) => {
        return artists => {
          let fav = Object.assign({}, artist, {favourited: true});
          artists.push(fav);
          return artists;
        }
      }).subscribe(this.updatesSubject$);

    this.removeFavSubject$
      .map((artist: Artist) => {
        return artists => {
          artist.favourited = false;
          return artists.filter((a: Artist) => a.id !== artist.id);
        }
      }).subscribe(this.updatesSubject$);

    this.removeAllSubject$
      .map(() => {
        return artists => {
          return artists.filter((a: Artist) => {
            a.favourited = false;
            return false;
          });
        }
      }).subscribe(this.updatesSubject$);
  }

  addFavourite(artist: Artist) {
    this.addFavSubject$.next(artist);
  }

  removeFavourite(artist: Artist) {
    this.removeFavSubject$.next(artist);
  }

  removeAll() {
    this.removeAllSubject$.next('');
  }
}


/*
 * Gets artists data from the echonest api
 * */
@Injectable()
export class EchonestArtistStoreService {
  artistsSubject$: Subject<any> = new Subject<any>();
  artists$: Observable<any>;

  constructor(private echonestService: EchonestService, private echonestFavStoreService: EchonestFavStoreService) {
    // Combines the streams from  favourites$ and new data from the api.
    // It updates the data from the api with any favourites$ that have been selected
    this.artists$ = this.artistsSubject$.combineLatest(
      this.echonestFavStoreService.favourites$,
      this.assignFavourite
    );
  }

  assignFavourite(artists: any[], favourites: any[]) {
    const artistIds = favourites.map((artist: Artist) => artist.id);
    artists.forEach((artist: Artist) => artist.favourited = artistIds.includes(artist.id))
    return artists;
  }

  getArtists(amountRequired: number = 0) {
    return amountRequired && this.echonestService.getArtists(amountRequired).subscribe(this.artistsSubject$);
  }
}


@Component({
  selector: 'artist-component',
  styles: [require('./echonest.css')],
  template: `
        <div class="artist">
            <span>[{{artist.hotttnesss}}]{{artist.name}}</span>
            <a href="#" 
                (click)="updateFavouriteState($event)" 
                [ngClass]="{disabled: isDisabled()}">
                {{btntxt}}
            </a>
        </div>`
})
export class ArtistComponent {
  @Input() artist: Artist;
  @Input() favourites: Boolean;
  private readonly ADD: string = 'Add';
  private readonly REMOVE: string = 'Remove';

  btntxt: string;

  constructor(private _favStore: EchonestFavStoreService) {}

  ngOnInit() {
    this.btntxt = (this.artist.favourited && this.favourites) ? this.REMOVE : this.ADD;
  }

  isDisabled() {
    return !!(this.artist.favourited && this.btntxt === this.ADD)
  }

  updateFavouriteState(evt: MouseEvent) {
    evt.preventDefault();
    if (this.artist.favourited && this.btntxt === this.REMOVE) {
      this._favStore.removeFavourite(this.artist);
    }
    if (!this.artist.favourited && this.btntxt === this.ADD) {
      this._favStore.addFavourite(this.artist);
    }
  }
}


@Component({
  selector: 'echonest-app',
  providers: [
    // provide(RequestOptions, {useClass: MyOptions})
    EchonestFavStoreService,
    EchonestService,
    EchonestArtistStoreService
  ],
  template: `
        <p class="file">src/app/http-rxjs/echonest-app/echonest-app.ts</p>
        <h4>A not particularly well written RxJs Mini App</h4>
        <h5 style="color: red;">Need to run the www/server for this</h5>
        
        <section style="float: left; width:200px">
            <header>
                Top 100 
                <dropdown-component 
                    [results]="[5,15,30,50,100]" 
                    (select)="artistStore.getArtists($event)">
                </dropdown-component>
            </header>
            <artist-component *ngFor="let artist of artists$ | async" [artist]="artist"></artist-component>
        </section>
        <section style="float:left; width:200px">
            <header>Favourites
            <button 
                [disabled]="(favouriteArtists$ | async)?.length===0" 
                (click)="removeAll()">
                Remove All
            </button>
            </header>
            <artist-component 
                *ngFor="let artist of favouriteArtists$ | async" 
                [artist]="artist"
                [favourites]="'true'">
            </artist-component>
        </section>
    `
})
export class EchonestAppComponent {
  favouriteArtists$: ReplaySubject<any>;
  artists$: Observable<any>;

  constructor(private artistStore: EchonestArtistStoreService,
              private favStore: EchonestFavStoreService) {
    this.artists$ = artistStore.artists$;
    this.favouriteArtists$ = favStore.favourites$;
  }

  removeAll() {
    this.favStore.removeAll();
  }
}
