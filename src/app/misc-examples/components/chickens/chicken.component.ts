import {Component, ElementRef, EventEmitter, Injectable, OnInit, Output, ViewChild} from '@angular/core';
// import {Response} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface Chicken {
  id: number;
  name: string
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * HttpDataService
 */
@Injectable({providedIn: 'root'})
export class HttpDataService {
  chickens: Observable<any>;

  constructor(private http: HttpClient) {
    this.chickens = http.get('/assets/json/chickens.json');
  }

  getData() {
    // forkjoin() is like a little like $q.all()

    return forkJoin(
      this.http.get('/assets/json/chickens.json').pipe(map((res: Chicken[]) => res)),
      this.http.get('/assets/json/customers.json').pipe(map((res: Customer[]) => res))
    );
  }
}


/**
 * SayNameButtonComponent
 */
@Component({
  selector: 'say-name-button',
  inputs: ['name'],
  template: `
    <div>
      <span>{{name}}</span>
      <button (click)='sayHello()'>Say my name</button>
    </div>
  `
})
export class SayNameButtonComponent {
  @Output() hello: EventEmitter<any> = new EventEmitter();
  name: string;

  sayHello() {
    this.hello.emit(this.name);
  }
}


/**
 * ChickenComponent
 */
@Component({
  selector: 'chicken-component',
  inputs: ['name'],
  template: `
    <p class='file'>misc-examples/components/chickens/chicken.component.ts</p>
    <h4>Simple example using @ViewChild, @Inputs, @Outputs and Http to display data</h4>
    <strong>forkjoin() is like a little like $q.all(). When all observables complete, emit the last value from
      each.</strong>

    <p style="font-weight: bold" #namey></p>

    <say-name-button
      *ngFor='let chicken of chickens'
      [name]='chicken.name'
      (hello)='saidHello($event)'>
    </say-name-button>
  `
})
export class ChickenComponent implements OnInit {
  @ViewChild('namey', {static: false}) namey: ElementRef;
  chickens: Chicken[] = [];
  customers: Customer[] = [];

  constructor(private httpService: HttpDataService) {
  }

  ngOnInit() {
    this.getData();
  }

  saidHello(name) {
    const el: HTMLElement = this.namey.nativeElement;
    el.innerText += ` : ${name}`;
  }

  getData() {
    this.httpService.getData().subscribe(data => {
      this.chickens = data[0];
      this.customers = data[1];
    });
  }
}
