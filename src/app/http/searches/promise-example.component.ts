import { Component } from '@angular/core';
import { WikiSearchService } from './wikipedia-search.service';

@Component({
  selector: 'wikipedia-promise',
  template: `
    <div>
      <p class="path">http-rxjs/searches/wikipedia-search-1.ts</p>
      <h4>Examples using promises</h4>
      <p>
          <dlink [id]="15"></dlink>
      </p>
      
      <input #term type='text' (keyup)='search(term.value)' placeholder='Wikipedia Search'>
      
      <ul>
        <li *ngFor='let item of items'>{{item}}</li>
      </ul>
    </div>
  `
})
export class JsonpWikipediaPromise {
  items: Array<string>;

  constructor(public wikiSearch: WikiSearchService) {
  }

  search(term: string) {
    return this.wikiSearch.search(term)
      .toPromise()
      .then(request => this.items = request[1]);
  }
}
