import {Directive, ElementRef, EventEmitter} from '@angular/core';
import {EchonestService} from './echonest.service'
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, mergeMap} from 'rxjs/operators';

@Directive({
  selector: 'input[type=text][autosearch]',
  providers: [EchonestService],
  outputs: ['results']
})
export class EchonestDirective {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private service: EchonestService) {
  }

  // mergeAll merges an observable sequence of observable sequences into an
  // observable sequence with the data values of the observables.
  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'keyup')
      .pipe(map((e: Event) => (<HTMLInputElement>e.target).value))
      .pipe(distinctUntilChanged())
      .pipe(debounceTime(500))
      .pipe(filter(text => text.length > 1))
      .pipe(mergeMap(name => this.service.songSearch(name)))
      .subscribe(data => this.results.emit(data));
  }
}
