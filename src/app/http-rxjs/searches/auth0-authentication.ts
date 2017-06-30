import {Component, Directive, EventEmitter, ElementRef, OnInit} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import * as Rx from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/do";


@Directive({
  selector: 'input[type=text][autosearch]',
  outputs: ['results']
})
export class AutosearchAuth implements OnInit {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    Rx.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .debounceTime(500)
      .map((e: any) => e.target.value)
      .filter(text => text.length >= 2)
      .subscribe(data => this.results.emit(data))
  }
}



@Component({
  selector: 'auth0-example',
  template: `
        <div class="search-results">
        <p class="path">src/app/http-rxjs/searches/auth0-authentication.ts</p>
        <h4>POSTing form data with custom headers example</h4>
        <pre>headers.append('Content-Type', "application/x-www-form-urlencoded");</pre>
        <p>Type anything in the input. It's just posting the data.<br>You need to run the www/server for this to work)</p>
        
        <input type="text" autosearch (results)="updates$.next($event)"><h3>{{searchTerm}}</h3>
        
        <pre *ngIf="jsonny">{{jsonny | json}}</pre>
    </div>
    `
})
export class Auth0Component {
  updates$: Rx.Subject<any> = new Rx.Subject<any>();
  searchTerm: string = '';
  jsonny: JSON;

  constructor(private _http: Http) {
    this.updates$
      .filter(text => typeof text === 'string')
      .do(text => this.searchTerm = text)
      .switchMap(text => this.getJSON(text))
      .subscribe((results: JSON) => this.jsonny = results);
  }

  getJSON(text): Observable<JSON> {
    // this will be converted into the body of the post
    let formBody = "username=gonto&password=" + text;
    let headers = new Headers();
    // this is a custom header and Express needs this configuration to make it work
    headers.append('Content-Type', "application/x-www-form-urlencoded");
    // Custom-FormNick is defined in express config in www/server
    headers.append('Custom-FormNick', "love-it");
    return this._http.post('//localhost:1970/data', formBody, {
      headers: headers
    }).map(res => res.json())
  }
}

