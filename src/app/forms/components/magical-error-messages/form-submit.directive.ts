import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

/**
 * The directive is straight-forward. It targets any form in our application and 
 * exposes the submit$ observable. In real life you’ll probably choose a more 
 * specific selector, like form[appForm]. We’re also using the shareReplay() 
 * operator, as we always want to create one event listener and not one per control.
 */

@Directive({
  selector: 'form'
})
export class FormSubmitDirective implements OnInit {
  submit$ : Observable<any>;

  constructor(private host: ElementRef<HTMLFormElement>) { }

  ngOnInit() {
    this.submit$ = fromEvent(this.element, 'submit')
      .pipe(tap(() => {
        if (this.element.classList.contains('submitted') === false) {
          this.element.classList.add('submitted');
        }
      }), shareReplay(1));
  }

  /**
   * shareReplay(bufferSize) is a multicasting operator that uses a ReplaySubject(). It doesn’t internally use the
   * multicast operator itself, and as a result it always returns an observable, rather than a ConnectableObservable.
   */

  get element() {
    return this.host.nativeElement;
  }
}