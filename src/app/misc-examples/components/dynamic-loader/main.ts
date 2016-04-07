import {Component, DynamicComponentLoader, ElementRef, Injector, provide, ComponentRef} from 'angular2/core'
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import {Person} from './person';
import {Car} from './car';

@Component({
    selector: 'app',
    providers : [
        provide('person', {useValue: Person}),
        provide('car', {useValue: Car})
    ],
    template: `
    <div>
      <button (click)="click$.next('person')">Add a Person</button>
      <button (click)="click$.next('car')">Add a Car</button>
      <div #loadTarget></div>
    </div>
  `
})
export class DynamicComponent {
    click$ = new Subject();

    constructor(
        private _loader:DynamicComponentLoader,
        private _ref:ElementRef,
        private injector:Injector
    ) {
        const loadComp = (compName:string) => Observable
            .fromPromise(
                // DynamicComponentLoader.loadIntoLocation returns Promise<ComponentRef>
                this._loader.loadIntoLocation(
                    this.injector.get(compName), //the injector looks up the component by string
                    this._ref, // element
                    'loadTarget' // target id
                )
            );

        this.click$
            //pass the 'string' from the click to the loadComp
            .switchMap((compName:string) => loadComp(compName))
            .subscribe((comp:ComponentRef) => {
                comp.instance.id = Math.random();
                console.log(comp);
            });
    }
}




