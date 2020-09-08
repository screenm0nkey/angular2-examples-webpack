import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CollapseItService } from "./collapse-it.service";

@Component({
  selector: '[collapse-it], collapse-it',
  template: `
      <section *ngIf="!open" class="collapse-it">
          <span style="font-size:12px;">{{path}}</span>
          <span class="title">{{title}}</span>
          <button (click)="elementClicked(elementRef)">O</button>
      </section>
      <section *ngIf="open" class="collapse-it">
          <button (click)="elementClicked(elementRef)">X</button>
          <div #elementRef>
              <ng-content></ng-content>
          </div>
      </section>
  `
})
export class CollapseItComponent implements AfterViewInit, OnInit {
  public open: boolean;
  public title: string;
  public path: string;
  public elementRef: ElementRef;

  constructor(public el: ElementRef, public collapseService: CollapseItService) {
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
      this.open = this.collapseService.getOpenState(this.title);
      this.collapseService.openAll$.subscribe((open: boolean) => {
        this.open = open;
        this.collapseService.storeOpenState(this.title, this.open)
      });
      this.setPath()
    }
    if (!this.title) {
      return setTimeout(() => this.setTitle(), 10);
    }
  }

  setPath() {
    const path = this.el.nativeElement.querySelector('.path');
    if (path && path.innerText) {
      this.path = path.innerText;
    }
  }

  elementClicked(element: ElementRef): void {
    this.open = !this.open;
    this.collapseService.storeOpenState(this.title, this.open);
  }
}
