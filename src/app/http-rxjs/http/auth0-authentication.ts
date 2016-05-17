import { Component, Directive, EventEmitter, ElementRef } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';


@Directive({
    selector: 'input[type=text][autosearch]',
    outputs: [ 'results' ]
})
class Autosearch {
    results: EventEmitter<any> = new EventEmitter();

    constructor(private elementRef: ElementRef) {
        console.log(this);
    }

    ngOnInit() {
        Rx.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .debounceTime(500)
            .map((e:any) => e.target.value)
            .filter(text => text.length >= 2)
            .subscribe(data => this.results.emit(data))
    }
}


@Component({
    selector: 'auth0-example',
    directives : [Autosearch],
    styles : [require('./main.css')],
    template: `
        <div class="search-results">
        <h4>Auth0 POST with headers example</h4>
        <p>(You need to run the www/server for this to work)</p>
        <input type="text" autosearch (results)="updates.next($event)">
        <pre>{{jsonny | json}}</pre>
    </div><hr>
    `
})
export class Auth0Component {
    updates: Rx.Subject<any> = new Rx.Subject<any>();
    searchTerm : string = '';
    jsonny : JSON;

    constructor(private _http: Http) {
        console.log(this);
        this.updates
            .do(text => this.searchTerm = text)
            .switchMap(text => this.getJSON(text))
            .subscribe((results:JSON)  => {
                console.log(results);
                this.jsonny = results
            });
    }

    getJSON(text) :Observable<any> {
        debugger
        // this will be converted into the body of the post
        let formBody = "username=gonto&password=" + text;
        let headers = new Headers();
        // this is a custom header and Express needed configuration to make it work
        headers.append('Content-Type', "application/x-www-form-urlencoded");
        headers.append('Custom-Nick', "love-it");

        return this._http.post('//localhost:1970/data', formBody, {
            headers : headers
        }).map(res => res.json())

    }
}

