import {Component, Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';
import {ReplaySubject} from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'collapse-all',
  template: `
      <button (click)="toggle()">{{text}}</button>`,
})
export class CollapseAllComponent implements OnInit {
  private openAll: boolean;
  private text: string;

  constructor(private cas: CollapseItService) {
  }

  ngOnInit(): void {
    this.openAll = false;
    this.text = this.openAll ? 'Collapse All' : 'Open All';
  }

  toggle() {
    this.openAll = !this.openAll;
    this.text = this.openAll ? 'Collapse All' : 'Open All';
    this.cas.openAll$.next(this.openAll);
  }
}


@Injectable({providedIn: 'root'})
export class CollapseItService {
  openAll$: Subject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    this.openAll$.next(false);
  }
}
