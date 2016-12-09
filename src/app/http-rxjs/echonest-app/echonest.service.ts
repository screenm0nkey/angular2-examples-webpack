import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';


export interface Artist {
  hotttnesss: Number;
  id: string;
  name: string;
  favourited: Boolean;
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
export class EchonestService {
  // https://itunes.apple.com/uk/rss/topsongs/limit=100/json
  url: string = 'http://localhost:1970/uk/rss/topsongs/limit=100/json';
  $topHotDataStream: Subject<any> = new Subject();

  constructor(private _http: Http) {
    console.log(this);
  }

  topHot(num: number) {
    this.search(num);
    return this.$topHotDataStream;
  }

  search(num: number) {
    var search = new URLSearchParams();
    search.set('api_key', 'AAXIWZI0HTK1NYTWQ');
    search.set('format', 'json');
    search.set('results', num + '');
    search.set('start', '0');
    search.set('bucket', 'hotttnesss');

    return this._http.get(this.url, {search})
      .map((res: Response) => res.json())
      .map((data: ITunesResponse) => data.feed.entry)
      .map(arr => {
        return arr.map((item: any, i: number) => {
          let artist = <Artist>{};
          artist.favourited = false;
          artist.hotttnesss = i + 1;
          artist.id = item.id.attributes['im:id'];
          artist.name = item['im:artist'].label;
          return artist;
        })
      }).subscribe(data => this.$topHotDataStream.next(data))
  }
}
