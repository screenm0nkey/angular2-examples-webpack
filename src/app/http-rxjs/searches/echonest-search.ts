import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  ViewEncapsulation
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as Rx from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/do";

type Response = {
    feed : {
      entry : any
    }
}

@Injectable()
export class Echonest {
  url: string;
  format: string;

  constructor(public http: HttpClient) {}

  songSearch(name) {
    name = name.toLocaleLowerCase();
    let url = "http://localhost:1970/uk/rss/topsongs/limit=100/json";
    return this.http
      .get(url)
      .map((res: Response) => res)
      .map(data => {
        return data.feed.entry
          .map((ent, x) => {
            return { id: x, label: ent["im:name"].label };
          })
          .filter(item => {
            return item.label.toLocaleLowerCase().indexOf(name) >= 0;
          });
      });
  }
}

@Component({
  selector: "artist-card",
  encapsulation: ViewEncapsulation.Native, // this makes it a real web components
  template: `<pre>{{artist.label}}</pre>`
})
export class ArtistCardRender {
  @Input() artist: Object;
}

@Directive({
  selector: "input[type=text][autosearch]",
  providers: [Echonest],
  outputs: ["results"]
})
export class Autosearch {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private service: Echonest) {}

  // mergeAll merges an observable sequence of observable sequences into an
  // observable sequence with the data values of the observables.
  ngOnInit() {
    Rx.Observable.fromEvent(this.elementRef.nativeElement, "keyup")
      .map((e: Event) => (<HTMLInputElement>e.target).value)
      .distinctUntilChanged()
      .debounceTime(500)
      .filter(text => text.length > 1)
      .mergeMap(name => this.service.songSearch(name))
      .subscribe(data => this.results.emit(data));
  }
}

@Component({
  selector: "echonest-search",
  providers: [Echonest],
  template: `
    <div class="search-results">
      <p class="path">/http-rxjs/searches/echonest-search.ts</p>
      <h4>Song Search example using <strong>input[type=text][autosearch]</strong> directive</h4>
      
      <p>Type a search word i.e. "st" (needs the www-server running)</p>
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
