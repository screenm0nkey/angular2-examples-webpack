import {Component, OnInit} from '@angular/core';
import {CollapseItService} from "./collapse-it.service";

@Component({
  selector: 'collapse-all',
  template: `
      <button (click)="toggle()">{{text}}</button>`,
})
export class CollapseAllComponent implements OnInit {
  public openAll: boolean;
  public text: string;

  constructor(public cas: CollapseItService) {
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
