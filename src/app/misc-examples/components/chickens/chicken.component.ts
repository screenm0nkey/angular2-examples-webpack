// import {Response} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, EventEmitter, Injectable, OnInit, Output, ViewChild } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Button {
  id: number;
  name: string;
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * HttpDataService
 */
@Injectable({ providedIn: "root" })
export class HttpDataService {
  chickens: Observable<any>;

  constructor(public http: HttpClient) {
    this.chickens = http.get("/assets/json/chickens.json");
  }

  getData(): Observable<[Button[], Customer[]]> {
    // forkjoin() is like a little like $q.all()
    return forkJoin([
      this.http
        .get("/assets/json/chickens.json")
        .pipe(map((res: Button[]) => res)),
      this.http
        .get("/assets/json/customers.json")
        .pipe(map((res: Customer[]) => res))
    ]);
  }
}

/**
 * SayNameButtonComponent
 */
@Component({
  selector: "say-name-button",
  inputs: ["name"],
  template: `
    <div>
      <span>{{ name }}</span>
      <button (click)="sayHello()">Say my name</button>
    </div>
  `
})
export class SayNameButtonComponent {
  @Output() hello: EventEmitter<string> = new EventEmitter();
  name: string;

  sayHello() {
    this.hello.emit(this.name);
  }
}

/**
 * ChickenComponent
 */
@Component({
  selector: "chicken-component",
  inputs: ["name"],
  template: `
    <p class="path">misc-examples/components/chickens/chicken.component.ts</p>
    <h4>
      Simple example using @ViewChild, @Inputs, @Outputs and Http to display
      data
    </h4>
    <p>
      forkjoin() is like a little like $q.all(). When all observables complete,
      emit the last value from each.
    </p>

    <p style="font-weight: bold" #namey></p>

    <say-name-button
      *ngFor="let button of buttons"
      [name]="button.name"
      (hello)="saidHello($event)"
    >
    </say-name-button>
  `
})
export class ChickenComponent implements OnInit {
  @ViewChild("namey") namey: ElementRef;
  buttons: Button[];
  customers: Customer[];

  constructor(public httpService: HttpDataService) { }

  ngOnInit() {
    this.getData();
  }

  saidHello(name): void {
    const el: HTMLElement = this.namey.nativeElement;
    el.innerText += ` : ${name}`;
  }

  getData(): void {
    this.httpService.getData().subscribe(data => {
      this.buttons = data[0];
      this.customers = data[1];
    });
  }
}
