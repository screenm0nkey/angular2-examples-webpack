import {provide, Component, ViewChild, ViewContainerRef, ComponentResolver} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http'

@Component({
    selector: 'gist-app',
    providers : [provide(Window, {useValue: window})],
    template: `
    <h4>Load a component from a Gist (not currently working. Example uses systemJS</h4>
    <a href="http://plnkr.co/edit/IpQ2HRa7yBj2YKZdgBZl?p=preview&open=app%2Fapp.component.ts" target="_blank">See Original Plunk here</a>
    <h2>Above</h2>
    
    <div #putStuffHere></div>
    <h2>Below</h2>
  `
})
export class GistAppComponent {
    @ViewChild('putStuffHere', {read: ViewContainerRef}) putStuffHere;

    constructor(
        public compResolver:ComponentResolver,
        public win : Window,
        public http : Http
    ){}

    ngAfterViewInit(){
        const url = 'https://gist.githubusercontent.com/johnlindquist/90c0a12814939738809ae0dceacdcf93/raw/e95c3204af1335693a45d65dbb61162824ad5ab8/loadMe.ts';

        const importer = url => this.http.get(url).map(res => res.text());
        const resolve = comp => Observable.fromPromise(this.compResolver.resolveComponent(comp));

        // importer(url)
        //     .switchMap(comp => {debugger; resolve(comp)})
        //     .subscribe(factory => this.putStuffHere.createComponent(factory))
    }
}
