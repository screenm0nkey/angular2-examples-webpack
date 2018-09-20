import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
}

@Injectable()
export class CharacterService {
  characters$: Observable<Character[]>;

  constructor(http: HttpClient) {
    this.characters$ = http.get<Character[]>('/json/characters.json');
  }
}

@Component({
  selector: 'subscribe-example',
  template: `
        <div class='search-results'>
          <p class='path'>/http-rxjs/misc-examples/subscribe.ts</p>
            <h4>Subscribe example</h4> 
            <pre class='limit-height'>{{characters | json}}</pre>
        </div>
    `,
  providers: [CharacterService]
})
export class SubscribeExample implements OnInit {
  characters: Character[] = [];

  constructor(private _characterService: CharacterService) {
    console.log(this);
  }

  ngOnInit() {
    this._characterService.characters$.subscribe(
      characters => (this.characters = characters)
    );
  }
}
