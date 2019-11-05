import {AfterViewInit, Component, DoCheck, ElementRef, OnInit} from '@angular/core';
import {CollapseItService} from "./collapse-all.component";

@Component({
  selector: '[collapse-it], collapse-it',
  template: `
      <section class="collapse-it">
          <span *ngIf="!open" class="title">{{title}}</span>
          <button *ngIf="!open" (click)="elementClicked(nick)">O</button>
          <button *ngIf="open" (click)="elementClicked(nick)">X</button>
          <div *ngIf="open" #nick>
              <ng-content></ng-content>
          </div>
      </section>`
})
export class CollapseItComponent implements AfterViewInit, OnInit, DoCheck {
  private open: boolean;
  private title: string;

  constructor(private el: ElementRef, private cas: CollapseItService) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    this.open = true;
    this.setTitle();
  }

  ngDoCheck() {
  }

  // i tried ngAfterContentInit but the content wasn't available
  ngAfterViewInit() {
  }

  setTitle() {
    const h4 = this.el.nativeElement.querySelector('H4');
    if (h4 && h4.innerText) {
      this.title = h4.innerText;
      this.open = false;
      this.cas.openAll$.subscribe(openAll => this.open = openAll);
    }
    if (!this.title) {
      return setTimeout(() => this.setTitle(), 10);
    }
  }

  elementClicked(element) {
    console.log(element);
    this.open = !this.open;
  }
}
