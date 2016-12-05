import {Component, Directive, EventEmitter, ElementRef, Injectable, ViewEncapsulation, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';


@Injectable()
export class Echonest {
  url: string;
  format: string;

  constructor(public http: Http) {
  }

  artistSearch(name) {
    name = name.toLocaleLowerCase();
    let url = 'http://localhost:1970/uk/rss/topsongs/limit=100/json';
    return this.http.get(url)
      .map((res: Response) => res.json())
      .map((data) => {
        return data.feed.entry
          .map((ent, x) => {
            return {id: x, label: ent['im:name'].label};
          })
          .filter(item => {
            return item.label.toLocaleLowerCase().indexOf(name) >= 0;
          })
      })
  }
}


@Directive({
  selector: 'input[type=text][autosearch]',
  providers: [Echonest],
  outputs: ['results']
})
export class Autosearch {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private service: Echonest) {
    console.log(this);
  }

  // mergeAll merges an observable sequence of observable sequences into an
  // observable sequence with the data values of the observables.
  ngOnInit() {
    Rx.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map((e: Event) => {
        let target = (<HTMLInputElement>e.target);
        return target.value;
      })
      .debounceTime(500)
      .filter(text => text.length > 1)
      .map(name => this.service.artistSearch(name))
      .mergeAll()
      .subscribe(data => {
        this.results.emit(data);
      })
  }
}


@Component({
  selector: 'artist-card',
  encapsulation: ViewEncapsulation.Native, // this makes it a real web components
  template: `<pre>{{artist.label}}</pre>`
})
export class ArtistCardRender {
  @Input() artist: Object;
}


@Component({
  selector: 'echonest-search',
  providers: [Echonest],
  template: `
    <div class="search-results">
        <h4>Echonest Search:</h4>
        <p>Type a search word (needs the www-server running)</p>
        Search <input type="text" autosearch (results)="setArtists($event)" placeholder="Echonest Search">
        
        <div *ngIf="artists">
            <div *ngFor="let artist of artists">
                <artist-card [artist]="artist"></artist-card>
            </div>
        </div>
        
    </div>
	`
})

export class EchonestSearch {
  artists: ArtistCardRender[];

  setArtists(artists) {
    if (Array.isArray(artists)) {
      this.artists = artists;
    }
  }
}
