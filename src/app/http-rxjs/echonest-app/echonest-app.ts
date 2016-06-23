import {Component, Injectable, OnInit, Input} from '@angular/core';

import {Observable} from 'rxjs/observable';
import {Subject} from "rxjs/subject";
import {ReplaySubject} from "rxjs/replaySubject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import {DropdownComponent} from './dropdown';
import {EchonestService, Artist} from './echonest.service';


/*
 * Deals with streams of data related to the favourites$
 * */
@Injectable()
export class EchonestFavStoreService {
    favourites$:ReplaySubject<any> = new ReplaySubject(1); // favourites$:ReplaySubject<Artist[]>
    addFavSubject$:Subject<any> = new Subject<any>();
    removeFavSubject$:Subject<any> = new Subject<any>();
    removeAllSubject$:Subject<any> = new Subject<any>();
    updatesSubject$:Subject<any> = new Subject<any>();
    initialState:Array<Artist> = [];

    constructor() {
        this.favourites$.next([]);

        this.updatesSubject$
            .scan((artistsAccumulator:Artist[], operation:Function) => {
                return operation(artistsAccumulator);
            }, this.initialState)
            .subscribe(this.favourites$);

        this.addFavSubject$
            .do(x => console.log('AddFav', x))
            .map((artist:Artist) => {
                return artists => {
                    let fav = Object.assign({}, artist, {favourited: true});
                    artists.push(fav);
                    return artists;
                }
            }).subscribe(this.updatesSubject$);

        this.removeFavSubject$
            .map((artist:Artist) => {
                return artists => {
                    artist.favourited = false;
                    return artists.filter((a:Artist)=> a.id !== artist.id);
                }
            }).subscribe(this.updatesSubject$);

        this.removeAllSubject$
            .map(() => {
                return artists => {
                    return artists.filter((a:Artist)=> {
                        a.favourited = false;
                        return false;
                    });
                }
            }).subscribe(this.updatesSubject$);
    }

    addFavourite(artist:Artist) {
        this.addFavSubject$.next(artist);
    }

    removeFavourite(artist:Artist) {
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
    combineSubject$:Subject<any> = new Subject<any>();
    artists$:Observable<any>;

    constructor(private _service:EchonestService, private _favStore:EchonestFavStoreService) {
        // Combines the streams from  favourites$ and new data from the api.
        // It updates the data from the api with any favourites$ that have been selected
        this.artists$ = this.combineSubject$.combineLatest(
            this._favStore.favourites$,
            this.assignFavourite
        );
    }


    assignFavourite(artists:any[], favs:any[]) {
        favs = favs.map((artist:Artist)=> artist.id);
        artists.forEach((artist:Artist)=> {
            artist.favourited = false;
            if (favs.indexOf(artist.id) >= 0) {
                artist.favourited = true;
            }
        });
        return artists;
    }


    getArtists(num:Number) {
        if (num) {
            this._service.topHot(num).subscribe(this.combineSubject$);
        }
    }
}


@Component({
    selector: 'artist-component',
    styles: [require('./echonest.css')],
    template: `
        <div class="artist">
            <span>{{artist.name}} {{favourites}}</span>
            <a href="#" 
                (click)="updateFavouriteState($event)" 
                [ngClass]="{disabled: getClass()}">
                {{btntxt}}
            </a>
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
        <h4>RxJs Itunes App [Need to run the www/server for this]</h4>
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
                [disabled]="buttonDisabled" 
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
    buttonDisabled:boolean = false;
    favouriteArtists$:ReplaySubject<any> = this.favStore.favourites$;
    artists$:Observable<any> = this.artistStore.artists$;

    constructor(private artistStore:EchonestArtistStoreService,
                private favStore:EchonestFavStoreService) {
        this.favouriteArtists$.subscribe((data:any)=> this.buttonDisabled = !data.length);
    }

    removeAll() {
        this.favStore.removeAll();
    }
}