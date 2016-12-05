import {
  Component,
  ViewContainerRef,
  ViewChild,
  Input,
  DynamicComponentLoader,
  Injector,
  ComponentRef
} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';


/*
 PERSON CLASS
 */
@Component({
  selector: 'person',
  template: `
        <style>div{border: 2px solid blue}</style>
        <div>My id: {{nid}} {{sid}}</div>
    `,
})
class Person {
  @Input() id;
}

/*
 CAR CLASS
 */
@Component({
  selector: 'car',
  template: `
        <style>div{border: 2px dashed red}</style>
        <div>Car's id {{nid}} {{sid}}</div>
    `,
})
class Car {
}


/*
 APP CLASS
 */
@Component({
  selector: 'dynamic-component-app',
  providers: [
    {provide: 'car', useValue: Car},
    {provide: 'person', useValue: Person}
  ],
  template: `
    <h4>Load components dynamically</h4>
    <a href="https://gist.run/?id=26b0d3323c912bb0a9b2d1eefb3ba8b9" target="_blank">Original Gist</a>
    <div>
      <button (click)="click$.next('person')">Add a Person</button>
      <button (click)="click$.next('car')">Add a Car</button>
      <div #loadTarget></div>
    </div>
  `
})
export class DynamicComponent {
  @ViewChild('loadTarget', {read: ViewContainerRef}) target;
  click$: Subject<any> = new Subject();

  constructor(private dcl: DynamicComponentLoader, private injector: Injector) {
    this.click$
    //pass the 'string' from the click to the loadComp
      .switchMap((compName: string) => this.loadComponent(compName))
      .subscribe((ref: ComponentRef<any>) => {
        ref.instance.nid = 'Subscribe ' + Math.round(Math.random() * 10);
        console.log(ref);
      });
  }

  loadComponent(compName: string): Observable<ComponentRef<any>> {
    var component = this.injector.get(compName);
    var promise = this.dcl.loadNextToLocation(component, this.target);

    promise.then((ref: ComponentRef<any>) => {
      // console.log(this.target._element.nativeElement);
      ref.instance.sid = 'Promise ' + Math.round(Math.random() * 10);
      console.log(ref);
    });
    return Observable.fromPromise(promise)
  }
}




