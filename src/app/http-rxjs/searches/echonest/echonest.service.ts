import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';

type Response = {
  feed : {
    entry : any
  }
}

@Injectable()
export class EchonestService {

  constructor(public http: HttpClient) {}

  songSearch(name) {
    return this.http
      .get('http://localhost:1970/uk/rss/topsongs/limit=100/json')
      .pipe(map((data: Response) => {
        return data.feed.entry
          .map((ent, x) => {
            return {id: x, label: ent["im:name"].label};
          })
          .filter(item => {
            return item.label.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0;
          });
      }));
  }
}
