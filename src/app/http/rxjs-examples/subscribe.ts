import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './shared-components';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  characters$: Observable<User[]>;

  constructor(http: HttpClient) {
    this.characters$ = http.get<User[]>('/assets/json/characters.json');
  }
}

@Component({
  selector: 'subscribe-example',
  template: `
        <div class='search-results'>
          <p class="path">/http-rxjs/misc-examples/subscribe.ts</p>
            <h4>Subscribe example</h4> 
            <pre class='limit-height'>{{characters | json}}</pre>
        </div>
    `,
  providers: [CharacterService]
})
export class SubscribeExample implements OnInit {
  characters: User[];

  constructor(public _characterService: CharacterService) {
  }

  ngOnInit() {
    this.characters = [];
    this._characterService.characters$.subscribe(
      characters => this.characters = characters
    );
  }
}
