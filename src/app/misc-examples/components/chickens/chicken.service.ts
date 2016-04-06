import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from "rxjs/Rx";


@Injectable()
export class ChickensService {
    chickens:Observable<any>;

    constructor(private http:Http) {
        this.chickens = http.get('/json/chickens.json');
    }

    getBooksAndMovies() {
        return Observable.forkJoin(
            this.http.get('/json/chickens.json').map((res:Response) => res.json()),
            this.http.get('/json/customers.json').map((res:Response) => res.json())
        );
    }
}