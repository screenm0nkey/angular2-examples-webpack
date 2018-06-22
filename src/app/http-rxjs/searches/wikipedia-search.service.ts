import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const CALLBACK = "callback=JSONP_CALLBACK";
const WIKIPEDIA = "https://en.wikipedia.org/w/api.php";
const QUERY = "action=query";
const JSON = "format=json";
const ALLIMAGES = "list=allimages";
const IMAGEINFO = "prop=imageinfo";
const API = `${WIKIPEDIA}?${QUERY}&${JSON}&${CALLBACK}&${ALLIMAGES}`;
const PROP_URL = "iiprop=url";

@Injectable()
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search = (term: string): Observable<string> => {
    let json$: Observable<string> = this.http
      .get(`${API}&${ALLIMAGES}&aifrom=${term}`)
      .map(res => {
        console.log(3, res);
        return <string>res;
      });
    return json$;
  };

  getImageTitles = allImages => {
    allImages = allImages.query.allimages.map(({ title }) => title);
    console.log(4, allImages);
    return allImages;
  };

  getImageInfoFromTitle = title => {
    let json$ = this.http.get(
      `${API}&${IMAGEINFO}&${PROP_URL}&titles=${title}`
    );
    return json$.map(res => {
      console.log(5, res);
      return res;
    });
  };

  mapImageInfoToUrls = body => {
    return Object.keys(body.query.pages)
      .filter((page: any) => page > 0) //page -1 means no images
      .map((page: any) => {
        page = body.query.pages[page];
        let imageInfo = page.imageinfo[0];
        imageInfo.title = page.title;
        console.log(6, imageInfo);
        return imageInfo;
      });
  };
}
