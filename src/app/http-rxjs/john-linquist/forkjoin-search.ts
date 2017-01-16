import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'forkjoin-app',
  styles: [`
  :host{
    display: flex;
  }
  .person{
    cursor: pointer;
  }
  .person:hover{
    color: blue;
  }
`],
  template: `<div class="master">
  <h4>forkJoin() People and vehicles</h4>
  <a href="http://plnkr.co/edit/fOhgiYQyKtjGCAeWvi5U?p=preview&open=app%2Fapp.component.ts" target="_blank">Original Plunk</a>
  <div *ngFor="let person of people$ | async">
    <div class="person" (click)="peopleClick$.next(person)">{{person.name}} ({{person.vehicles.length}})</div>
  </div>
</div>


<div class="detail">
  <h2 *ngIf="vehicles$ | async">Vehicles</h2>
  <div *ngFor="let vehicle of vehicles$ | async">
    <div>{{vehicle.name}}</div>
    <img [src]="vehicle.image_path" alt="">
  </div>
</div>
`
})
export class ForkJoinComponent {
  static API = 'https://starwars-json-server-aikiidixsl.now.sh';

  people$;
  peopleClick$ = new Subject();
  vehicles$;

  constructor(public http: Http) {
  }

  ngOnInit() {
    this.people$ = this.http
      .get(`${ForkJoinComponent.API}/people`)
      .map(res => res.json()
        .filter(person => person.vehicles.length));

    // forkJoin is similar to $q.all(). The person.vehicles.map below returns multiple requests
    const loadVehiclesFromPerson = person =>
      Observable.forkJoin(
        person.vehicles.map(id =>
          this.http
            .get(`${ForkJoinComponent.API}/vehicles/${id}`)
            .map(res => res.json())
            .map(v => Object.assign({}, v, {image_path: `${ForkJoinComponent.API}/${v.image}`}))
        ));

    // share() is the same as publish().refCount(). refCount() is built on connect().
    // refCount() causes the ConnectableObservable to subscribe to the underlying source
    // as soon as there is a first subscriber and to unsubscribe from it as soon as there’s no subscribers.
    this.vehicles$ = this.peopleClick$
      .switchMap(loadVehiclesFromPerson)
      .share();
  }
}


