import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SuperListItemComponent } from "./super-list-item.component";

@Component({
  selector: 'view-children-01-example',
  template: `
      <collapse-it>
          <p class="path">misc-examples/components/view-children/view-children-01.ts</p>
          <h4>Using @ViewChildren, @ViewChild and <lgt>ElementRef</lgt> local ref to keep count</h4>

          <code>@ViewChildren(AComponent) children: QueryList<lgt>AComponent</lgt></code>
          <code>@ViewChild('myref', <cur>static: false</cur>) el: ElementRef;</code>

          <section class="example">
              <button (click)='addItem()'>Add Item</button>
              <ul>
                  <super-list-item *ngFor='let item of items' [name]='item'></super-list-item>
              </ul>
              <pre #myref></pre>
          </section>
      </collapse-it>
  `
})
export class ViewChildren01Component implements AfterViewInit {
  @ViewChildren(SuperListItemComponent) children: QueryList<SuperListItemComponent>;
  @ViewChild('myref') el: ElementRef;

  public items: string[] = [];

  ngAfterViewInit() {
    this.updatePreInfo(this.children.length);
    this.children.changes.subscribe((items: SuperListItemComponent[]) => {
      this.updatePreInfo(items.length);
    });
  }

  updatePreInfo(length) {
    this.el.nativeElement.innerHTML = `Items = ${length}`;
  }

  addItem() {
    this.items.push('yeah ' + Math.round(Math.random() * 100));
  }
}
