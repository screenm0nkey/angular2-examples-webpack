import {Component, Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

export interface Character {
  id: number;
  name: string;
}

@Injectable()
export class CharacterService {
  characters$: Observable<Character[]>;

  constructor(http: Http) {
    this.characters$ = http.get('/json/characters.json').map(res => res.json());
  }
}

@Component({
  selector: 'subscribe-example',
  template: `
        <div class="search-results">
          <p class="path">src/app/http-rxjs/misc-examples/subscribe.ts</p>
            <h4>Subscribe example</h4> 
            <pre class="limit-height">{{characters | json}}</pre>
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
    this._characterService.characters$.subscribe(characters => this.characters = characters);
  }
}
