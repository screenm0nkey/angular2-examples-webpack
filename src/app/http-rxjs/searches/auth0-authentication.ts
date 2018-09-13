import {Component, Directive, ElementRef, EventEmitter, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {fromEvent, Observable, Subject} from "rxjs";
import {debounceTime, filter, map, switchMap, tap} from 'rxjs/operators';

@Directive({
  selector: "input[type=text][autosearch]",
  outputs: ["results"]
})
export class AutosearchAuth implements OnInit {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, "keyup")
      .pipe(debounceTime(500))
      .pipe(map((e: any) => e.target.value))
      .pipe(filter(text => text.length >= 2))
      .subscribe(data => this.results.emit(data));
  }
}

@Component({
  selector: "auth0-example",
  template: `
    <div class="search-results">
        <p class="path">/http-rxjs/searches/auth0-authentication.ts</p>
        <h4>POSTing form data with custom headers example</h4>
        <pre>headers.append('Content-Type', "application/x-www-form-urlencoded");</pre>
        <p>Type anything in the input. It's just posting the data.<br>You need to run the www/server for this to work)</p>
        
        <input 
          type="text" 
          autosearch 
          (results)="updates$.next($event)">
        <h3>{{searchTerm}}</h3>
        <pre *ngIf="jsonny">{{jsonny | json}}</pre>
    </div>
    `
})
export class Auth0Component implements OnInit {
  updates$: Subject<any> = new Subject<any>();
  searchTerm: string = "";
  jsonny: JSON;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this.updates$
      .pipe(filter(text => typeof text === "string"))
      .pipe(tap(text => this.searchTerm = text))
      .pipe(switchMap(text => this.getJSON(text)))
      .subscribe((results: JSON) => (this.jsonny = results));
  }

  getJSON(text): Observable<Object> {
    // this will be converted into the body of the post
    let formBody = "username=gonto&password=" + text;
    let headers = new HttpHeaders();
    // this is a custom header and Express needs this configuration to make it work
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    // Custom-FormNick is defined in express config in www/server
    headers.append("Custom-FormNick", "love-it");
    return this._http
      .post("//localhost:1970/data", formBody, {headers})
      .pipe(map(res => res));
  }
}
