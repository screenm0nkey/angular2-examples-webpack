import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


export interface Artist {
  hotttnesss: number;
  id: string;
  name: string;
  favourited: boolean;
  sid: number;
}

export interface ITunesResponse {
  feed: {
    entry: Artist[]
  };
}

/*
 * Gets artists data from the echonest api
 * */
@Injectable()
export class EchonestRepo {
  // https://itunes.apple.com/uk/rss/topsongs/limit=100/json
  private static url: string = 'http://localhost:1970/uk/rss/topsongs/limit=100/json';

  constructor(private _http: Http) {
  }

  get(num: number): Observable<Artist[]> {
    const search = new URLSearchParams();
    search.set('api_key', 'AAXIWZI0HTK1NYTWQ');
    search.set('format', 'json');
    search.set('results', num + '');
    search.set('start', '0');
    search.set('bucket', 'hotttnesss');

    return this._http.get(EchonestRepo.url, {search})
      .map((res: Response) => res.json())
      .map((data: ITunesResponse) => data.feed.entry)
      .map(arr => arr.map((item: any, i: number) => {
        let artist = <Artist>{};
        artist.favourited = false;
        artist.hotttnesss = i + 1;
        artist.id = item.id.attributes['im:id'];
        artist.name = item['im:artist'].label;
        return artist;
      }));
  }
}
