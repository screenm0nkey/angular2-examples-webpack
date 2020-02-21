import { Directive, ElementRef, EventEmitter } from '@angular/core';
import { MusicSearchService } from './echonest.service'
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap } from 'rxjs/operators';

@Directive({
  selector: 'input[type=text][musicsearch]',
  providers: [MusicSearchService],
  outputs: ['results']
})
export class MusicSearchDirective {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private service: MusicSearchService) {
  }

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'keyup')
      .pipe(
        map((e: Event) => (<HTMLInputElement>e.target).value),
        distinctUntilChanged(),
        debounceTime(500),
        filter(text => text.length > 1),
        mergeMap(name => this.service.songSearch(name))
      ).subscribe(data => this.results.emit(data))
  }
}
