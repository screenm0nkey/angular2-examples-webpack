import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './shared-components';
import { takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  characters1$: Observable<User[]>;
  characters2$: Observable<User[]>;

  constructor(http: HttpClient) {
    this.characters1$ = http.get<User[]>('/assets/json/characters.json');
    this.characters2$ = http.get<User[]>('/assets/json/characters.json');
  }
}

export class BaseComponent implements OnDestroy {
  destroyed = new Subject();
  constructor() { }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

@Component({
  selector: 'subscribe-example',
  template: `
        <div class='search-results'>
          <p class="path">/http-rxjs/misc-examples/subscribe.ts</p>
            <h4>Manage your unsubscription with the class inheritance feature</h4> 
            <pre class='limit-height'>{{characters1 | json}}</pre>
        </div>
    `,
  providers: [CharacterService]
})
export class SubscribeExample extends BaseComponent implements OnInit {
  characters1: User[];
  characters2: User[];

  constructor(public _characterService: CharacterService) {
    super();
  }

  ngOnInit() {
    this.characters1 = [];
    this.characters2 = [];


    this._characterService.characters1$
      .pipe(takeUntil(this.destroyed))
      .subscribe(characters => this.characters1 = characters);

    this._characterService.characters2$
      .pipe(takeUntil(this.destroyed))
      .subscribe(characters => this.characters2 = characters);

  }
}
