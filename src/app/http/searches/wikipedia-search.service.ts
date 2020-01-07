import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

export type WikiImage = {
  descriptionurl: string;
  title: string;
};

const CALLBACK = "callback=JSONP_CALLBACK";
// https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
const WIKIPEDIA_URL = "/wikipedia-proxy";
const QUERY = "action=query";
const ALLIMAGES = "list=allimages";
const IMAGEINFO = "prop=imageinfo";
const API = `${WIKIPEDIA_URL}?${QUERY}&${"format=json"}&${CALLBACK}&${ALLIMAGES}`;
const PROP_URL = "iiprop=url";

const defaultParams = {
  callback: "JSONP_CALLBACK",
  action: "opensearch",
  format: "json"
};

//https://en.wikipedia.org/w/api.php?action=query&format=json&callback=JSONP_CALLBACK&list=allimages&list=allimages&aifrom=car'

const defaultOptions = {
  params: defaultParams,
  responseType: "text"
};

@Injectable({ providedIn: "root" })
export class WikiSearchService {
  constructor(private http: HttpClient) {}

  get(url: string, options): Observable<JSON> {
    let headers = new HttpHeaders();
    headers = headers.append("Access-Control-Allow-Origin", "*");
    headers = headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    headers = headers.append(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, Authorization"
    );

    const opts = Object.assign({ responseType: "text", headers }, options);
    return (
      this.http
        .get(url, opts)
        // .pipe(tap(res => console.log(res)))
        .pipe(map(this.handleJSONPResponse))
    );
  }

  handleJSONPResponse(res): JSON {
    const newRes = res.replace("/**/JSONP_CALLBACK(", "");
    const json = JSON.parse(newRes.substr(0, newRes.length - 1));
    // console.log(11, json);
    return json;
  }

  search(term: string): Observable<any> {
    const res$ = this.get(WIKIPEDIA_URL, {
      responseType: "text",
      params: {
        callback: "JSONP_CALLBACK",
        action: "opensearch",
        format: "json",
        search: term
      }
    });
    return res$;
  }

  searchForImages(term: string): Observable<JSON> {
    return this.get(`${API}&${ALLIMAGES}&aifrom=${term}`, {});
  }

  // 4
  getImageTitles(allImages) {
    allImages = allImages.query.allimages.map(({ title }) => title);
    console.log(4, allImages);
    return allImages;
  }

  // 5
  getImageInfoFromTitle(title): Observable<JSON> {
    return this.get(`${API}&${IMAGEINFO}&${PROP_URL}&titles=${title}`, {});
  }

  mapImageInfoToUrls(body) {
    return Object.keys(body.query.pages)
      .filter((page: any) => page > 0) // page -1 means no images
      .map((page: any) => {
        page = body.query.pages[page];
        let imageInfo = page.imageinfo[0];
        imageInfo.title = page.title;
        console.log(6, imageInfo);
        return imageInfo;
      });
  }
}
