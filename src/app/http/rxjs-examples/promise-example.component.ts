import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Character {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CharacterService {
  characters: Character[] = [];

  constructor(public _http: HttpClient) {
  }

  getCharacters(): Promise<Character[]> {
    this.characters.length = 0;
    let promise = this._http
      .get('/assets/json/characters.json')
      .toPromise(null)
      .then((characters: Character[]) => {
        this.characters.push(...characters);
        return this.characters;
      });
    return promise;
  }
}

@Component({
  selector: 'promise-example',
  template: `
    <p class="path"> /http-rxjs/misc-examples/promise.ts</p>
    <h4>Promise example</h4> 
     <p style='margin-bottom: 10px'>There are {{characters.length}} characters <br/>{{characters | json}}</p>
  `,
  providers: [CharacterService]
})
export class PromiseExample implements OnInit {
  characters: Character[];

  constructor(public _characterService: CharacterService) {
    console.log(this);
  }

  ngOnInit() {
    this.characters = [];
    this._characterService.getCharacters().then((characters: Character[]) => {
      this.characters = characters;
    });
  }
}
