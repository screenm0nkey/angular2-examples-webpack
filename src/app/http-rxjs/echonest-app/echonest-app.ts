import {Component, Injectable, OnInit, Input} from '@angular/core';

import {Observable} from 'rxjs/observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import {DropdownComponent} from './dropdown';
import {EchonestService, Artist, EchonestResponse} from './echonest.service';




/*
 * Deals with streams of data related to the favourites
 * */
@Injectable()
export class EchonestFavStoreService {
    favourites:Rx.ReplaySubject<any> = new Rx.ReplaySubject(1); // favourites:Rx.ReplaySubject<Artist[]>
    addFavSubject:Rx.Subject<any> = new Rx.Subject<any>();
    removeFavSubject:Rx.Subject<any> = new Rx.Subject<any>();
    removeAllSubject:Rx.Subject<any> = new Rx.Subject<any>();
    updatesSubject:Rx.Subject<any> = new Rx.Subject<any>();
    initialState:Array<Artist> = [];

    constructor() {
        this.favourites.next([]);

        this.updatesSubject
            .scan((artistsAccumulator:Artist[], operation:Function) => {
                return operation(artistsAccumulator);
            }, this.initialState)
            .subscribe(this.favourites);


        this.addFavSubject
            .do(x => console.log('AddFav', x))
            .map((artist:Artist) => {
                return artists => {
                    let fav = Object.assign({}, artist, {favourited: true});
                    artists.push(fav);
                    return artists;
                }
            })
            .subscribe(this.updatesSubject);


        this.removeFavSubject
            .map((artist:Artist) => {
                return artists => {
                    artist.favourited = false;
                    return artists.filter((a:Artist)=> a.id !== artist.id);
                }
            })
            .subscribe(this.updatesSubject);

        this.removeAllSubject
            .map(() => {
                return artists => {
                    return artists.filter((a:Artist)=> {
                        a.favourited = false;
                        return false;
                    });
                }
            })
            .subscribe(this.updatesSubject);
    }

    addFavourite(artist:Artist) {
        this.addFavSubject.next(artist);
    }

    removeFavourite(artist:Artist) {
        this.removeFavSubject.next(artist);
    }

    removeAll() {
        this.removeAllSubject.next('');
    }
}

/*
 * Gets artists data from the echonest api
 * */
@Injectable()
export class EchonestArtistStoreService {
    combineSubject:Rx.Subject<any> = new Rx.Subject<any>();
    artists:Rx.Subject<any> = new Rx.Subject<any>();

    constructor(private _service:EchonestService, private _favStore:EchonestFavStoreService) {
        /*
        * This combines the streams from  favourites and new data from the api.
        * It updates the data from the api with any favourites that have been selected
        * */
        this.combineSubject.combineLatest(this._favStore.favourites).subscribe(data => {
            let artists = data[0];
            let favs = data[1].map((artist:Artist)=> artist.id);

            artists.forEach((artist:Artist)=> {
                artist.favourited = false;
                if (favs.indexOf(artist.id) >= 0) {
                    artist.favourited = true;
                }
            });
            this.artists.next(artists);
        });
    }

    getArtists(num:Number) {
        if (num) {
            this._service.topHot(num).subscribe(data => {
                this.combineSubject.next(data);
            });
        }
    }
}


@Component({
    selector: 'artist-component',
    styles: [require('./echonest.css')],
    template: `
        <div class="artist">
            <span>{{artist.name}} {{artist.favourited}} {{favourites}}</span>
            <a href="#"  (click)="updateFavouriteState($event)" [ngClass]="{disabled: getClass()}">{{btntxt}}</a>
        </div>`
})
class ArtistComponent {
    @Input() artist:Artist;
    @Input() favourites:Boolean;
    btntxt:string;
    ADD:string = 'Add';
    REMOVE:string = 'Remove';

    constructor(private _favStore:EchonestFavStoreService) {
        console.log(this);
    }

    ngOnInit() {
        this.btntxt = (this.artist.favourited && this.favourites) ? this.REMOVE : this.ADD;
    }

    getClass() {
        if (this.artist.favourited && this.btntxt === this.ADD) {
            return true;
        }
    }

    updateFavouriteState(evt:Event) {
        evt.preventDefault();
        if (this.artist.favourited && this.btntxt === this.REMOVE) {
            this._favStore.removeFavourite(this.artist);
        } else if (!this.artist.favourited && this.btntxt === this.ADD) {
            this._favStore.addFavourite(this.artist);
        }
    }
}


@Component({
    selector: 'echonest-app',
    directives: [ArtistComponent, DropdownComponent],
    providers: [
        // provide(RequestOptions, {useClass: MyOptions})
        EchonestFavStoreService,
        EchonestService,
        EchonestArtistStoreService
    ],
    template: `
        <h4>RxJs Echonest App</h4>
        <section style="float: left; width:200px">
            <header>Top 100 
                <dropdown-component [results]="[5,15,30,50,100]" (select)="artistStore.getArtists($event)"></dropdown-component>
            </header>
            <artist-component *ngFor="let artist of artists" [artist]="artist"></artist-component>
        </section>
        <section style="float:left; width:200px">
            <header>Favourites 
            <button [disabled]="!favouriteArtists.length" (click)="removeAll()">Remove All</button>
            </header>
            <artist-component *ngFor="let artist of favouriteArtists" [artist]="artist" [favourites]="'true'"></artist-component>
        </section>
    `
})
export class EchonestAppComponent implements OnInit {
    artists:Array<Artist> = [];
    favouriteArtists:Array<Artist> = [];

    constructor(private artistStore:EchonestArtistStoreService, private favStore:EchonestFavStoreService) {
        console.log(this);
    }

    ngOnInit() {
        this.favStore.favourites.subscribe(data=>this.favouriteArtists = data);
        this.artistStore.artists.subscribe(data=>this.artists = data);
    }

    removeAll() {
        this.favStore.removeAll();
    }
}