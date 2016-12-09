import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";


@Injectable()
export class ChickensService {
  chickens: Observable<any>;

  constructor(private http: Http) {
    this.chickens = http.get('/json/chickens.json');
  }

  getBooksAndMovies() {
    // When all observables complete, emit the last value from each.
    // forkjoin() is like a little like $q.all()
    return Observable.forkJoin(
      this.http.get('/json/chickens.json').map((res: Response) => res.json()),
      this.http.get('/json/customers.json').map((res: Response) => res.json())
    );
  }
}
