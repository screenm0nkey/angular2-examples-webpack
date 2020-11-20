import { Injectable } from '@angular/core';
import { combineLatest, merge, Observable, Subject, timer } from "rxjs";
import {
  distinctUntilChanged,
  filter, mapTo,
  pairwise, scan,
  shareReplay, startWith,
  switchMap,
  takeUntil,
  tap
} from "rxjs/operators";
import { RxJsKeyChecker } from './think-reactively-keychecker.service';



@Injectable({
  providedIn: 'root'
})
export class RxJsSpinner {
  public count$: Subject<string> = new Subject();
  public spinner$: Subject<string> = new Subject();
  public percentage$: Subject<string> = new Subject();

  private taskStarts = new Subject();
  private taskCompletions = new Subject();

  private updateSpinner$: Observable<boolean> = new Observable(() => {
    this.spinner$.next('SHOW SPINNER');
    console.log('%cShow Spinner. Ive been subscribed to', 'color:violet');
    return () => {
      this.spinner$.next('');
      console.log('%cHide Spinner. Ive been unsubscribed from!', 'color:violet');
    }
  });

  public init() {
    return source => {
      return new Observable(subscriber => {
        this.newTaskStarted();
        console.log("%cI've been subscribed to. Task start...", 'color:turquoise')
        const sourceSubscription = source.subscribe(subscriber);
        return () => {
          sourceSubscription.unsubscribe();
          this.existingTaskCompleted();
          console.log("%cI've been unsubscribed from. Task complete...", 'color:turquoise');
        }
      });
    };
  }

  constructor(private keyChecker: RxJsKeyChecker) {
    this.setupSpinner();
  }

  newTaskStarted() {
    this.taskStarts.next();
  }

  existingTaskCompleted() {
    this.taskCompletions.next();
  }

  showPercentage(total, completed) {
    return new Observable(() => {
      //setup
      const percent = Math.round((completed / total) * 100)
      this.percentage$.next(`${percent}%`);
      return () => {
        //teardown
        this.spinner$.next('');
      }
    });
  }

  calculateLoanCountReducer(totalCurrentLoads, changeInLoads) {
    const newLoadCount = totalCurrentLoads + changeInLoads;
    return newLoadCount < 0 ? 0 : newLoadCount;
  }

  calculatePercentagesReducer(loadStats, loadingUpdate) {
    const loadsWentDown = loadingUpdate < loadStats.previousLoading;
    const currentCompleted = loadsWentDown
      ? loadStats.completed + 1
      : loadStats.completed;
    return {
      total: currentCompleted + loadingUpdate,
      completed: currentCompleted,
      previousLoading: loadingUpdate
    };
  }//

  private setupSpinner(): void {
    const loadUp$ = this.taskStarts.pipe(mapTo(1));
    const loadDown$ = this.taskCompletions.pipe(mapTo(-1));
    const loadVariations$ = merge(loadUp$, loadDown$);
    const currentLoadCount$ = loadVariations$.pipe(
      startWith(0),
      scan(this.calculateLoanCountReducer),
      distinctUntilChanged(),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    const loadCountActive$ = currentLoadCount$.pipe(
      pairwise(), //puts the previous and current value into an array
      filter(([prevCount, currCount]) => prevCount === 0 && currCount === 1),
      tap(x => console.log('%cloadCountActive$ Load Count Changed from 0 to 1', 'color:gold')),
    );

    const loadCountNotActive$ = currentLoadCount$.pipe(
      filter(count => count === 0),
      tap(x => console.log('%cLoad Count Changed to 0', 'color:gold')),
    );

    const twoSecondTimer$ = timer(2000).pipe(
      tap(x => console.log('%c2 second Timer Completed', 'color:red')),
    );

    /*
    When does the spinner need to hide?
      When 2 events have completed:
        1) Load count goes down to zero (loadCountNotActive$) and
        2) Two seconds have passed (twoSecondTimer$)
    */
    const hideSpinner$ = combineLatest([loadCountNotActive$, twoSecondTimer$])
      .pipe(
        tap(x => console.log('%c2 Second Timer Complete and the Load Count equals 0', 'color:lightblue')),
      );

    /*
      The moment the load count becomes active (more than zero)
        Switch to waiting for 2s before showing the spinner
        But cancel if the load count goes to 0 (inactive) again in the meantime
    */
    const showSpinner$ = loadCountActive$
      .pipe(
        switchMap(() => twoSecondTimer$.pipe(takeUntil(loadCountNotActive$))),
        tap(x => console.log('%cIts been longer than 2 seconds since the Load Count has been above 1. Show spinner', 'color:lime')),
      );

    const keyValidatorCompletes$ = this.keyChecker.validateKeys(["a", "a", "s", "d", "f"]);

    showSpinner$
      .pipe(
        // this line translates as subscribe to updateSpinner$ and then unsubscribe when hideSpinner$ emits a value
        switchMap(() => this.updateSpinner$.pipe(takeUntil(hideSpinner$))),
        // this will never log as this.updateSpinner$ isn't returning an observable stream, like say timer(1000) would,
        // so nothing below will continue
        tap(_ => console.log('I WILL NEVER LOG')),
        // so even though the above log won't ever be invoked, this takeUntil still works
        // and it will dispose of everything above it when the keyValidatorCompletes$ emits a value
        takeUntil(keyValidatorCompletes$))
      .subscribe();


    const shouldShowPercentage$ = currentLoadCount$
      .pipe(
        scan(this.calculatePercentagesReducer, { total: 0, completed: 0, previousLoading: 0 }),
        tap(({ total, completed, previousLoading }) => {
          this.count$.next(`total=${total}, completed=${completed}, previousLoading=${previousLoading}`);
        })
      );

    shouldShowPercentage$
      .pipe(
        switchMap(stats => this.showPercentage(stats.total, stats.completed))
      ).subscribe();
  }

}
