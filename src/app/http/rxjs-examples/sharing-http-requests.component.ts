import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { User } from './shared-components';

@Component({
  selector: 'share-http-request',
  template: `
    <p class="path">http/rxjs-examples/sharing-http-requests.component.ts</p>  
    <h4>How to share a HTTP request</h4>
    

    <dlink id="86"></dlink>

    <p><strong>share() is a shortcut for multicast(() => new Subject()) + refCount()</strong></p>

    <p>HTTP Request count for allUsers$ = <strong>{{allUserCount}}</strong></p>
    <user [user]="firstUser$ | async"></user>
    <user [user]="secondUser$ | async"></user> 
    <users-list [users]="allUsers$ | async"></users-list>
    <hr>
    <button (click)="shared()">Shared</button>
    <button (click)="notShared()">Not Shared</button>

    <p>
    As we’ve learned, share() creates a new Subject that internally subscribes to the source. When the source emits, the subject will notify each one of the subscribers.
    The solution is achieved because now, when we subscribe to firstUser$ and secondUser$, we’re subscribing to the internal subject, not directly to the source.
    In this example we can see the shared only makes one HTTP connection but not shared makes 3.
    </p>
  `,
})
export class ShareHttpRequest {
  allUsers$: Observable<User[]>;
  firstUser$: Observable<User>;
  secondUser$: Observable<User>;
  allUserCount: number;

  constructor(public http: HttpClient) {
  }

  notShared() {
    this.allUserCount = 0;
    this.allUsers$ = this.http.get('/assets/json/customers.json').pipe(
      map((users: User[]) => {
        this.allUserCount++;
        return users.filter(user => user.gender === 'female');
      })
    );
    this.firstUser$ = this.allUsers$.pipe(map(users => users[0]));
    this.secondUser$ = this.allUsers$.pipe(map(users => users[1]));
  }

  // is a shortcut for multicast(() => new Subject()) + refCount()
  shared() {
    this.allUserCount = 0;
    this.allUsers$ = this.http.get('/assets/json/customers.json').pipe(
      map((users: User[]) => {
        this.allUserCount++;
        return users.filter(user => user.gender === 'female');
      }),
      share() // THIS IS THE ONLY DIFFERENCE FROM NOT_SHARED
    );
    this.firstUser$ = this.allUsers$.pipe(map(users => users[0]));
    this.secondUser$ = this.allUsers$.pipe(map(users => users[1]));
  }
}


