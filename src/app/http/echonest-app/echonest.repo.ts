import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Artist {
  hotttnesss: number;
  id: string;
  name: string;
  favourited: boolean;
  sid: number;
}

export interface ITunesResponse {
  feed: {
    entry: Artist[];
  };
}

/*
 * Gets artists data from the echonest api
 * */
@Injectable({providedIn: 'root'})
export class EchonestRepo {
  // https://itunes.apple.com/uk/rss/topsongs/limit=100/json
  private static url: string = '/api/uk/rss/topsongs/limit=100/json';

  constructor(private _http: HttpClient) {
  }

  get(num: number): Observable<Artist[]> {
    let headers = new HttpHeaders();
    headers = headers.append('header-1', 'value-1');

    let params = new HttpParams();
    params = params.set('api_key', 'AAXIWZI0HTK1NYTWQ');
    params = params.set('format', 'json');
    params = params.set('results', num + '');
    params = params.set('start', '0');
    params = params.set('bucket', 'hotttnesss');


    return this._http
      .get(EchonestRepo.url, {headers, params})
      // .map((res: Response) => res)
      .pipe(map((data: ITunesResponse) => data.feed.entry))
      .pipe(map(arr =>
        arr.map((item: any, i: number) => {
          let artist = <Artist>{};
          artist.favourited = false;
          artist.hotttnesss = i + 1;
          artist.id = item.id.attributes['im:id'];
          artist.name = item['im:artist'].label;
          return artist;
        })
      ));
  }
}
