import {Component, EventEmitter, Output, OnInit, ViewChild, ElementRef} from "@angular/core";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";


@Injectable()
export class ChickensService {
  chickens: Observable<any>;

  constructor(private http: Http) {
    this.chickens = http.get('/json/chickens.json');
  }

  getBooksAndMovies() {
    // When all observables complete, emit the last value from each.
    // forkjoin() is like a little like $q.all()
    return Observable.forkJoin(
      this.http.get('/json/chickens.json').map((res: Response) => res.json()),
      this.http.get('/json/customers.json').map((res: Response) => res.json())
    );
  }
}



@Component({
  selector: 'chick-component',
  inputs: ['name'],
  template: `
        <div>
          <span>{{name}}</span>
          <button (click)="sayHello()">Say my name</button>
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
      <p class="file">misc-examples/components/chickens/chicken.component.ts</p>
      <h4>Simple example using @ViewChild, @Inputs, @Outputs and Http to display data</h4>
      <strong>forkjoin() is like a little like $q.all()</strong>
      <p #namey></p>
       <chick-component
        *ngFor="let chicken of chickens"
        [name]="chicken.name"
        (hello)="saidHello($event)">
    </chick-component>
    `
})
export class ChickenComponent implements OnInit {
  @ViewChild('namey') namey : ElementRef;
  chickens: any = [];
  customers: any = [];

  constructor(private chickensService: ChickensService) {}

  ngOnInit() {
    this.getBooksAndMovies();
  }

  saidHello(name) {
    const el : HTMLElement = this.namey.nativeElement;
    el.innerText +=` : ${name}`;
  }

  getBooksAndMovies() {
    this.chickensService.getBooksAndMovies().subscribe(
      data => {
        this.chickens = data[0];
        this.customers = data[1];
      }
    );
  }
}
