import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

export interface Artist {
    hotttnesss : Number;
    id : string;
    name : string;
    favourited : Boolean;
}

export interface EchonestResponse {
    response : {
        artists : Artist[],
        status : Object
    };
}

/*
 * Gets artists data from the echonest api
 * */
@Injectable()
export class EchonestService {
    url:string = 'http://developer.echonest.com/api/v4/artist/top_hottt';

    constructor(private _http:Http) {
        console.log(this);
    }

    topHot(num:Number) {
        var search = new URLSearchParams();
        search.set('api_key', 'AAXIWZI0HTK1NYTWQ');
        search.set('format', 'json');
        search.set('results', num + '');
        search.set('start', '0');
        search.set('bucket', 'hotttnesss');

        return this._http.get(this.url, {search})
            .map((res:Response) => res.json())
            .map((data:EchonestResponse) => data.response.artists)
            .map(arr => {
                return arr.map((artist:Artist) => {
                    artist.favourited = false;
                    return artist;
                })
            });
    }
}