import { Component } from '@angular/core';

@Component({
  template: `
    <div class='comps'>
    <section collapse-it>
        <h4>Common RxJs uses with HTTP requests</h4>
        <p>These are all the different RxJs static methods and operators used in all of the examples in this app</p>
        <highlight>Static methods</highlight>
        <code>
          forkJoin(int$, ext$) <br>
          timer(delay, repeatMs).pipe(take(5)); <br>
          combineLatest <br>
          interval <br>
          merge <br>
          of <br>
          range <br>
          Observable <br>
          Subject <br>
          ReplaySubject <br>
          BehaviorSubject <br>
          fromEvent
        </code>
        <highlight>Operators</highlight>
        <code>
          .pipe(map(term => (!term.length ? "" : "Enter a term"))) <br>
          .pipe(mapTo([])) <br>
          .pipe(tap((val)=>console.log(val))) <br>
          .pipe(distinctUntilChanged())  <br>
          .pipe(debounceTime(250))  <br>
          .pipe(delay(1000))  <br>
          .pipe(filter(term => term.length > 2)) <br>
          .pipe(switchMap(this.wikipediaImageSearch.bind(this))) <br>
          .pipe(switchMapTo(intervalThatStops$));
          .pipe(mergeMap(this.wikipediaService.getImageInfoFromTitle))  <br> 
          .pipe(startWith([]))  <br>
          .pipe(concatAll())  <br>
          .pipe(takeUntil(this.input$)) <br>
          .pipe(scan((acc, curr) => [...acc, ...curr])); <br>
          .pipe(share()); <br>
          .pipe(publishReplay(1)) <br>
          .pipe(refCount()); <br>
          .pipe(combineLatest(store.select("filterReducer"))) <br>
          .pipe(withLatestFrom(this.time$, (_, y) => y)) <br>
          .pipe(zip(interval(50), x => x)); <br>
        </code>
      </section>
    
        <auto-wiki-search></auto-wiki-search>
        <counter-component></counter-component>
        <promise-example></promise-example>  
        <subscribe-example></subscribe-example>
      </div>
    `
})
export class RxJsExamplesComponent {
}
