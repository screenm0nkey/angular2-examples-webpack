import {Component, OnInit, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";


export interface Character {
    id: number;
    name: string;
}


@Injectable()
export class CharacterService {
    characters: Observable<Character[]>;
    constructor(http:Http){
        this.characters = http.get('/json/characters.json').map(res => res.json());
    }
}

@Component({
    selector: 'subscribe-example',
    styles : [require('./main.css')],
    template: `<div class="search-results">Subscribe example : There are <pre>{{characters | json}}</pre> characters</div><hr>`,
    providers : [CharacterService]
})
export class SubscribeExample implements OnInit {
    characters : Character[] = [];
    constructor(private _characterService : CharacterService) {
        console.log(this);
    }

    ngOnInit() {
        this._characterService.characters.subscribe(characters=> this.characters = characters);
    }
}
