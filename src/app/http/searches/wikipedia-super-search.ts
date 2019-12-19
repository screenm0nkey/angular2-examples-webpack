import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {WikiSearchService} from './wikipedia-search.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
class WikipediaService2 {
  constructor(private http: HttpClient, private wikiSearch: WikiSearchService) {
  }

  search(terms$: Observable<string>, debounceDuration = 400) {
    return terms$
      .pipe(debounceTime(debounceDuration))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((term: string) => this.rawSearch(term)));
  }

  rawSearch(term: string) {
    const params = {
      callback: 'JSONP_CALLBACK',
      action: 'opensearch',
      search: term,
      format: 'json'
    };
    return this.wikiSearch.get('/wikipedia-proxy', {params});
  }
}

@Component({
  selector: 'wikipedia-super-search',
  providers: [WikipediaService2],
  template: `
    <div>
      <p class='path'>/http-rxjs/searches/wikipedia-super-search.ts</p>
      <h4>Using the <highlight>formControl.valueChanges</highlight> Observable and JSONP</h4>
      
      Search <input type='text' [formControl]='term' placeholder='Wikipedia Search'/>
      
      <ul>
        <li *ngFor='let item of items$ | async'>{{item}}</li>
      </ul>
    </div>
  `
})
export class WikipediaSuperSearch {
  items$: Observable<any>;
  term = new FormControl();
  valueChanges$: Observable<any> = this.term.valueChanges;

  constructor(private wikipediaService: WikipediaService2) {
    this.items$ = wikipediaService.search(this.valueChanges$, 350);
  }
}
