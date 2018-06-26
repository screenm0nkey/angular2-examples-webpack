import {Directive, ElementRef, EventEmitter} from "@angular/core";
import {EchonestService} from "./echonest.service"
import * as Rx from "rxjs/Rx";

@Directive({
  selector: "input[type=text][autosearch]",
  providers: [EchonestService],
  outputs: ["results"]
})
export class EchonestDirective {
  results: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private service: EchonestService) {
  }

  // mergeAll merges an observable sequence of observable sequences into an
  // observable sequence with the data values of the observables.
  ngOnInit() {
    Rx.Observable.fromEvent(this.elementRef.nativeElement, "keyup")
      .map((e: Event) => (<HTMLInputElement>e.target).value)
      .distinctUntilChanged()
      .debounceTime(500)
      .filter(text => text.length > 1)
      .mergeMap(name => this.service.songSearch(name))
      .subscribe(data => this.results.emit(data));
  }
}
