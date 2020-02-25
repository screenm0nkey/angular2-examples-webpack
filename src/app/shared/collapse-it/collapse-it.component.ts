import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CollapseItService } from "./collapse-it.service";

@Component({
  selector: '[collapse-it], collapse-it',
  template: `
      <section *ngIf="!open" class="collapse-it">
          <span class="title">{{title}}</span>
          <button (click)="elementClicked(nick)">O</button>
      </section>
      <section *ngIf="open" class="collapse-it">
          <button (click)="elementClicked(nick)">X</button>
          <div #nick>
              <ng-content></ng-content>
          </div>
      </section>
  `
})
export class CollapseItComponent implements AfterViewInit, OnInit {
  public open: boolean;
  public title: string;
  public nick: ElementRef;

  constructor(public el: ElementRef, public cas: CollapseItService) {
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
