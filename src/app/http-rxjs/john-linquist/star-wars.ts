import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, merge, Observable, Subject} from 'rxjs';
import {debounceTime, filter, map, mapTo, share, startWith, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'star-wars',
  styles: [
    `
      input {
        border: 1px solid black;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
      }
    `
  ],
  template: `
    <p class='path'>/http-rxjs/john-linquist/star-wars.ts</p>
    <h4>Search for a Star Wars character (supports regex)</h4>

    <input (keyup)='input$.next($event)'>
    <h3>{{(people$ | async)?.length}} results</h3>
    <div class='container'>
      <h5 *ngFor='let person of people$ | async' style='display: block'>{{person.name}}</h5>
      <h3 *ngIf='noResults$ | async'>No one matched your search</h3>
    </div>
  `,
  providers: [
    {provide: 'URL', useValue: 'https:// swapi.co/api'}
  ]
})
export class StarWarsComponent {
  input$ = new Subject();
  people$;
  noResults$;

  constructor(public http: HttpClient, @Inject('URL') public api) {
    const term$ = this.input$.pipe(map((ev: any) => ev.target.value));
    const clear$ = term$.pipe(filter(term => term.length < 2));

    const results$ = term$
      .pipe(debounceTime(250))
      .pipe(filter((term: string) => term.length > 1))
      .pipe(switchMap(this.getStarWarsCharacter.bind(this)))
      .pipe(tap(console.log.bind(console)))
      .pipe(share());
    // @ts-ignore
    this.people$ = merge(clear$.pipe(mapTo([]), results$)).pipe(startWith([]));

    this.noResults$ = combineLatest(
      results$,
      term$,
      (results: any[], term: string) => {
        return results.length == 0 && term.length > 1;
      }
    ).pipe(startWith(false));
  }

  getStarWarsCharacter(term: string): Observable<any> {
    return this.http
      .get(`${this.api}/people?name_like=${term}`)
      .pipe(map((res: { results: any[] }) => res.results))
      .pipe(map((results: any[]) =>
        results.map(person =>
          Object.assign({}, person, {image: `${this.api}/${person.image}`})
        )));
  }
}
