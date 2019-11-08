import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/internal/ReplaySubject';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({providedIn: 'root'})
export class CollapseItService {
  openAll$: Subject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    // this.openAll$.next(false);
  }

  storeOpenState(title: string, openState: boolean) {
    const map = this.getFromLocalStorage();
    const key = this.createKeyFromTitle(title);
    map[key] = openState;
    console.log(map);
    localStorage.setItem('collapseIt', JSON.stringify(map));
  }

  getOpenState(title: string): boolean {
    const map = this.getFromLocalStorage();
    const key = this.createKeyFromTitle(title);
    return !!map[key];
  }

  private createKeyFromTitle(title: string = ''): string {
    return title.replace(/[\{\}\<\>\[\]\/@,.:\-='?&\s*]/g, '').toLowerCase()
  }

  private getFromLocalStorage() {
    const map = localStorage.getItem('collapseIt');
    return map ? JSON.parse(map) : {};
  }
}
