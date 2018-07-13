import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const CALLBACK = "callback=JSONP_CALLBACK";
const WIKIPEDIA_URL = "https://en.wikipedia.org/w/api.php";
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

const defaultOptions = {
  params: defaultParams,
  responseType: 'text'
};

@Injectable()
export class WikiSearchService {
  constructor(private http: HttpClient) {
  }


  handleJSONPResponse(res): JSON {
    debugger
    const newRes = res.replace('/**/JSONP_CALLBACK(', '');
    const json = JSON.parse(newRes.substr(0, newRes.length - 1));
    console.log(11, json);
    return json;
  }

  get = (url: string, options): Observable<JSON> => {
    const opts = Object.assign({responseType: 'text'}, options);
    return this.http.get(url, opts).map(this.handleJSONPResponse);
  };


  search = (term: string): Observable<any> => {
    return this.get(WIKIPEDIA_URL, {
      responseType: 'text',
      params: {
        callback: "JSONP_CALLBACK",
        action: "opensearch",
        format: "json",
        search: term,
      }
    })
  };

  searchForImages = (term: string): Observable<JSON> => {
    return this.get(`${API}&${ALLIMAGES}&aifrom=${term}`, {});
  };

  getImageTitles = allImages => {
    allImages = allImages.query.allimages
      .map(({title}) => title);
    console.log(4, allImages);
    return allImages;
  };

  getImageInfoFromTitle = (title): Observable<JSON> => {
    return this.get(`${API}&${IMAGEINFO}&${PROP_URL}&titles=${title}`, {});
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
