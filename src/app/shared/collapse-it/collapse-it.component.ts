import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {CollapseItService} from "./collapse-it.service";

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
export class CollapseItComponent implements AfterViewInit, OnInit {
  private open: boolean;
  private title: string;

  constructor(private el: ElementRef, private cas: CollapseItService) {
    // console.log(el.nativeElement);
  }

  ngOnInit() {
    this.open = true;
    this.setTitle();
  }

  // i tried ngAfterContentInit but the content wasn't available
  ngAfterViewInit() {
  }

  setTitle() {
    const h4 = this.el.nativeElement.querySelector('H4');
    if (h4 && h4.innerText) {
      this.title = h4.innerText;
      this.open = this.cas.getOpenState(this.title);
      this.cas.openAll$.subscribe((open: boolean) => {
        this.open = open;
        this.cas.storeOpenState(this.title, this.open)
      });
    }
    if (!this.title) {
      return setTimeout(() => this.setTitle(), 10);
    }
  }

  elementClicked(element: ElementRef): void {
    this.open = !this.open;
    this.cas.storeOpenState(this.title, this.open);
  }
}
