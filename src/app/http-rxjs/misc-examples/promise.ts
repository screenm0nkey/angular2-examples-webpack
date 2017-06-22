import {Component, OnInit, Injectable} from "@angular/core";
import {Http} from "@angular/http";


export interface Character {
  id: number;
  name: string;
}

@Injectable()
export class CharacterService {
  characters: Character[] = [];

  constructor(private _http: Http) {
  }

  getCharacters(): Promise<Character[]> {
    this.characters.length = 0;
    let promise = this._http.get('/json/characters.json')
      .map((response: any) => response.json())
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
    <p class="file"> src/app/http-rxjs/misc-examples/promise.ts</p>
    <h4>Promise example</h4> 
     <p style="margin-bottom: 10px">There are {{characters.length}} characters <br/>{{characters | json}}</p>
  `,
  providers: [CharacterService]
})
export class PromiseExample implements OnInit {
  characters: Character[] = [];

  constructor(private _characterService: CharacterService) {
    console.log(this);
  }

  ngOnInit() {
    this._characterService.getCharacters()
      .then((characters: Character[]) => {
        this.characters = characters;
      });
  }
}

