import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SearchResult} from './youtube-result-class'
import {Observable} from 'rxjs/observable';


@Injectable()
export class YoutubeService {
    BASE_URL:string = 'https://www.googleapis.com/youtube/v3/search';
    API_TOKEN:string = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

    constructor(private http:Http) {
        console.log(this);
    }

    normaliseData(item:any) {
        return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
        });
    }

    search(query: string): Observable<SearchResult[]> {
        let params:string = [
            `q=${query}`,
            `key=${this.API_TOKEN}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join("&");

        let queryUrl:string = `${this.BASE_URL}?${params}`;

        return this.http.get(queryUrl)
            .map((res:Response) => res.json())
            .map((json:any) => {
                let arr = [];
                json.items.forEach(item => {
                    arr.push(this.normaliseData(item))
                });
                return arr;
            });
    }
}