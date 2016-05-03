import { Component, Directive, EventEmitter, ElementRef, Injectable, ViewEncapsulation, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

function log (num) {
    return x => console.log(num, x);
}


@Injectable()
class Echonest {
    url: string;
    apiKey: string;
    format: string;

    constructor(public http: Http) {
        this.url = 'http://developer.echonest.com/api/v4/';
        this.apiKey = 'AAXIWZI0HTK1NYTWQ';
    }

    artistSearch(name) {
        let endpoint = 'artist/suggest?';
        //"&format=json" is added to this query string in the BaseRequestOptions
        let url = this.url + endpoint + '&api_key=' + this.apiKey + '&results=6' + '&name=' + name + 'format=json';
        return this.http.get(url)
            .map((res: Response) => res.json())
    }
}




@Directive({
    selector: 'input[type=text][autosearch]',
    providers : [Echonest],
    outputs: [ 'results' ]
})
class Autosearch {
    results: EventEmitter<Object[]> = new EventEmitter();

    constructor(private elementRef: ElementRef, private service: Echonest) {
        console.log(this);
    }

    // mergeAll merges an observable sequence of observable sequences into an
    // observable sequence with the data values of the observables.
    ngOnInit() {
        Rx.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .map((e:Event) => {
                let target = (<HTMLInputElement>e.target);
                return target.value;
            })
            .filter(text => text.length > 2)
            .map(name => this.service.artistSearch(name))
            .do(log('before mergeAll'))
            .mergeAll()
            .do(log('after mergeAll'))
            .subscribe(data => this.results.emit(data.response.artists))
    }
}




@Component({
    selector: 'artist-card',
    encapsulation: ViewEncapsulation.Native, // this makes it a real web components
    template: `<pre>{{artist | json}}</pre>`
})
class ArtistCardRender {
    @Input() artist: Object;
}



@Component({
    selector: 'echonest-search',
    providers : [Echonest],
    directives: [Autosearch, ArtistCardRender],
    styles : [require('./main.css')],
    template: `
    <div class="search-results">
        <h4>Echonest Search:</h4>
        Search <input type="text" autosearch (results)="artists = $event" placeholder="Echonest Search">

        <div *ngIf="artists">
            <div *ngFor="let artist of artists">
                <artist-card [artist]="artist"></artist-card>
            </div>
        </div>
    </div>
    <hr>
	`
})

export class EchonestSearch {
    constructor(private echonest : Echonest) {
        console.log(this);
    }
}
