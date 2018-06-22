import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toArray";
import "rxjs/add/operator/do";
import "rxjs/add/operator/share";
import "rxjs/add/observable/from";
import "rxjs/add/observable/forkJoin";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

interface Person {
  vehicles: number[];
}

interface Vehicle {
  image: string;
  image_path: string;
  name: string;
  manufacturer: string;
}

@Component({
  selector: "forkjoin-app",
  styles: [
      `
      :host {
        display: flex;
      }

      .person {
        cursor: pointer;
        text-decoration: underline;
      }

      .person:hover {
        color: blue;
      }
    `
  ],
  template: `
    <div class="master">
      <p class="path">/http-rxjs/john-linquist/forkjoin-search.ts</p>
      <h4> forkJoin() People and vehicles</h4>
      <a href="http://plnkr.co/edit/fOhgiYQyKtjGCAeWvi5U?p=preview&open=app%2Fapp.component.ts" target="_blank">Original
        Plunk</a>
      <a href="https://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html">share() is a shortcut for
        publish().refCount()</a>

      <div *ngFor="let person of people$ | async">
        <div class="person" (click)="peopleClick$.next(person)">{{person.name}} ({{person.vehicles.length}})</div>
      </div>
    </div>

    <div class="detail">
      <h2 *ngIf="vehicles$ | async">Vehicles</h2>
      <div *ngFor="let vehicle of vehicles$ | async">
        <div>{{vehicle.name}} - {{vehicle.manufacturer}}</div>
        <img [src]="vehicle.image_path" alt="">
      </div>
    </div>
  `
})
export class ForkJoinComponent implements OnInit {
  static API = "https://swapi.co/api";
  people$;
  peopleClick$ = new Subject();
  vehicles$;

  constructor(public http: HttpClient) {
  }

  /*
  share() is the same as publish().refCount(). refCount() is built on connect().
  publish creates a ConnectableObservable which shares a single subscription to the underlying source.
  However, the publish operator doesn’t subscribe to the underlying source just yet. It’s more like a
  gatekeeper that makes sure that subscriptions aren’t made to the underlying source but to
  the ConnectableObservable instead.
  refCount() causes the ConnectableObservable to subscribe to the underlying source
  as soon as there is a first subscriber and to unsubscribe from it as soon as there’s no subscribers.
   */
  ngOnInit() {
    this.getPeopleWhoHaveVehicles();
    this.vehicles$ = this.peopleClick$
      .switchMap(this.getVehiclesFromPerson.bind(this))
      .share();
  }

  getPeopleWhoHaveVehicles() {
    this.people$ = this.http
      .get(`${ForkJoinComponent.API}/people`)
      .map((res:{results:any[]})=>res.results)
      .map((results: Person[]) => results.filter((person: Person) => person.vehicles.length));

    this.people$.subscribe(res => console.log(1333, res));
  }

  getVechicle(vehicleUrl: string): Observable<Vehicle> {
    return <Observable<Vehicle>>this.http.get(vehicleUrl)
  }

  // forkJoin runs all observable sequences in parallel and collect their last elements.
  // forkJoin is similar to $q.all(). The person.vehicles.map below returns multiple requests
  getVehiclesFromPerson(person: Person):Observable<Vehicle[]>  {
    return Observable.forkJoin(
      person.vehicles.map((id: any) => this.getVechicle(id))
    );
  }
}
