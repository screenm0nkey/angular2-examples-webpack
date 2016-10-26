import {Component, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'star-wars',
  styles: [`
      input{
        border: 1px solid black;
      }
      .container{
        display: flex;
        flex-wrap: wrap;
    }
  `],
  template: `
      <h4>Search for a Star Wars character (supports regex)</h4>
      <input (keyup)="input$.next($event)">
      <h3>{{(people$ | async)?.length}} results</h3>
      <div class="container">
        
        <div *ngFor="let person of people$ | async">
          <h2>{{person.name}}</h2>
          <img [src]="person.image" />
        </div>
        <h3 *ngIf="noResults$ | async">No one matched your search</h3>
      </div>
  `,
  providers: [
    {provide: 'API', useValue: 'https://swapi-json-server-vlhfwhtpic.now.sh'}],
})
export class StarWarsComponent {
  input$ = new Subject();
  people$;
  noResults$;

  getStarWarsCharacter(term: string): Observable<any> {
    let obs$ = this.http.get(`${this.api}/people?name_like=${term}`);
    return obs$.map((res: Response) => {
      return res.json().map(person => {
        return Object.assign({}, person, {image: `${this.api}/${person.image}`});
      })
    });
  }

  constructor(public http: Http, @Inject('API') public api) {
    const term$ = this.input$
      .map((ev: any) => ev.target.value);

    const clear$ = term$
      .filter(term => term.length < 2);

    const results$ = term$
      .debounceTime(250)
      .filter((term: string) => term.length > 1)
      .switchMap(this.getStarWarsCharacter.bind(this))
      .do(console.log.bind(console))
      .share();

    this.people$ = Observable.merge(
      clear$.mapTo([]),
      results$
    ).startWith([]);

    this.noResults$ = Observable.combineLatest(
      results$,
      term$,
      (results: any[], term: string)=> {
        return results.length == 0 && term.length > 1;
      })
      .startWith(false)
  }
}
