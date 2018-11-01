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
  lastName: string
}

@Injectable()
export class ChickensService {
  chickens: Observable<any>;

  constructor(private http: HttpClient) {
    this.chickens = http.get('/assets/json/chickens.json');
  }

  getBooksAndMovies() {
    // forkjoin() is like a little like $q.all()
    // When all observables complete, emit the last value from each.
    return forkJoin(
      this.http.get('/assets/json/chickens.json').pipe(map((res: Chicken[]) => res)),
      this.http.get('/assets/json/customers.json').pipe(map((res: Customer[]) => res))
    );
  }
}

@Component({
  selector: 'chick-component',
  inputs: ['name'],
  template: `
    <div>
      <span>{{name}}</span>
      <button (click)='sayHello()'>Say my name</button>
    </div>
  `
})
export class ChickComponent {
  @Output() hello: EventEmitter<any> = new EventEmitter();
  name: string;

  constructor() {
    console.log(this);
  }

  sayHello() {
    this.hello.emit(this.name);
  }
}

@Component({
  selector: 'chicken-component',
  inputs: ['name'],
  template: `
    <p class='file'>misc-examples/components/chickens/chicken.component.ts</p>
    <h4>Simple example using @ViewChild, @Inputs, @Outputs and Http to display data</h4>
    <strong>forkjoin() is like a little like $q.all()</strong>
    <p #namey></p>
    <chick-component
      *ngFor='let chicken of chickens'
      [name]='chicken.name'
      (hello)='saidHello($event)'>
    </chick-component>
  `
})
export class ChickenComponent implements OnInit {
  @ViewChild('namey') namey: ElementRef;
  chickens: Chicken[] = [];
  customers: Customer[] = [];

  constructor(private chickensService: ChickensService) {
  }

  ngOnInit() {
    this.getBooksAndMovies();
  }

  saidHello(name) {
    const el: HTMLElement = this.namey.nativeElement;
    el.innerText += ` : ${name}`;
  }

  getBooksAndMovies() {
    this.chickensService.getBooksAndMovies().subscribe(data => {
      this.chickens = data[0];
      this.customers = data[1];
    });
  }
}
