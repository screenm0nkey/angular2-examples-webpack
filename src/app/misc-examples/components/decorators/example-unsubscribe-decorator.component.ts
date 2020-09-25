import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


export function TakeUntilDestroy(constructor: Function /*DaddyHelloComponent*/): void {
  const originalDestroy = constructor.prototype.ngOnDestroy;

  if (typeof originalDestroy !== 'function') {
    console.warn(`${constructor.name} is using @TakeUntilDestroy but does not implement OnDestroy`);
  }

  constructor.prototype.componentDestroy = function (): object {
    // this = DaddyHelloComponent instance
    this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();
    return this._takeUntilDestroy$.asObservable();
  };

  constructor.prototype.ngOnDestroy = function (...args): void {
    if (typeof originalDestroy === 'function') {
      originalDestroy.apply(this, args);
    }

    if (this._takeUntilDestroy$) {
      this._takeUntilDestroy$.next();
      this._takeUntilDestroy$.complete();
    }
  };
}




@Component({
  selector: 'whooopla',
  template: `
    <p class="path">src/app/misc-examples/components/decorators/example-unsubscribe-decorator.component.ts</p>
    <h4>Unsubscribe on Destroy Decorator</h4>  
    <dlink id="101"></dlink>
    <sisisisisi *ngIf="!destroyed" name="{{ name }}"></sisisisisi>
    <p>Open the console below to see results</p>
    <button (click)="destroyChild()">Destroy & Unsubscribe</button>
  `
})
export class MommyAppComponent {
  name = 'Angular';
  destroyed: boolean;

  destroyChild(): void {
    this.destroyed = true;
    console.log('UNSUBSCRIBED');
  }
}



@Component({
  selector: 'sisisisisi',
  template: `
    <h1>Hello {{name}}!</h1>
    <h3>I'm child component<h3>
  `,
})
@TakeUntilDestroy
export class DaddyHelloComponent implements OnInit, OnDestroy {
  @Input() name: string;
  interval$: Observable<number>;
  private componentDestroy: () => Observable<unknown>;

  ngOnInit(): void {
    this.interval$ = interval(1000);
    this.interval$
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(console.log);
  }

  ngOnDestroy(): void { }
}


