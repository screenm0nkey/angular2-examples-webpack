import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {KeepCountComponent} from './keep-count.component';
import {SuperListItemComponent} from "./super-list-item.component";

@Component({
  selector: 'view-children-02-example',
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/view-children/view-children-02.ts</p>
          <h4>Accessing a component's API using @ViewChild - List count example</h4>
          
          <code>
              @ViewChildren(SuperListItemComponent) children: QueryList <lgt>SuperListItemComponent</lgt>;
              @ViewChild(KeepCountComponent, <cur>static: false</cur>) private keepCount: KeepCountComponent;
          </code>

          <section class="example">
              <button (click)='addItem()'>Add Item</button>
              <ul>
                  <super-list-item *ngFor='let item of items' [name]='item'></super-list-item>
              </ul>
              <keep-count></keep-count>
          </section>
      </collapse-it>
  `
})
export class ViewChildren02Component implements AfterViewInit {
  @ViewChildren(SuperListItemComponent) children: QueryList<SuperListItemComponent>;
  @ViewChild(KeepCountComponent, {static: false}) private keepCount: KeepCountComponent;

  public items: string[] = ['hello'];

  ngAfterViewInit() {
    this.updatePreInfo(this.children.length);
    this.children.changes.subscribe((items: SuperListItemComponent[]) => {
      this.updatePreInfo(items.length);
    });
  }

  updatePreInfo(length) {
    this.keepCount.updateCount(length);
  }

  addItem() {
    this.items.push('yeah ' + Math.round(Math.random() * 100));
  }
}
