import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Response = {
  feed: {
    entry: any
  }
}

@Injectable({ providedIn: 'root' })
export class MusicSearchService {

  constructor(public http: HttpClient) {
  }

  songSearch(name: string): Observable<string[]> {
    return this.http
      .get('/api/uk/rss/topsongs/limit=100/json')
      .pipe(map((data: Response) => this.matchSongTitle(name, data.feed.entry)));
  }

  private matchSongTitle(name: string, items): string[] {
    return items
      .map((ent, x: number) => ({ id: x, label: ent['im:name'].label }))
      .filter(item => item.label.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0);
  }
}
