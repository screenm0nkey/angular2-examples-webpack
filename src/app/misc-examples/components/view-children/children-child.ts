import {Component, Input, ViewChildren, AfterViewInit, ViewChild, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'super-item',
  template: `<li>{{name}}</li>`
})
class SuperItemComponent {
  @Input('name') name: string;
}

@Component({
  selector: 'my-component2',
  directives: [SuperItemComponent],
  template: `
        <h4>@ViewChildren and @ViewChild</h4>
        <button (click)="addItem()">Add Item</button>
        <ul>
            <super-item *ngFor="let item of items" [name]="item"></super-item>
        </ul>
        <pre #myref></pre>
    `
})
export class ViewChildrenComponent implements AfterViewInit {
  @ViewChildren(SuperItemComponent) children: QueryList<SuperItemComponent>;
  @ViewChild('myref') el: ElementRef;

  public items: string[] = ['hello', 'world', 'today'];

  ngAfterViewInit() {
    this.updatePreInfo(this.children.length);
    this.children.changes.subscribe((items: SuperItemComponent[]) => {
      items.forEach((item: SuperItemComponent) => console.log(item.name));
      this.updatePreInfo(items.length);
    });
  }

  updatePreInfo (length) {
    this.el.nativeElement.innerHTML = `Items = ${length}`;
  }

  addItem() {
    // this will emit an chnage event to the SuperListComponent component subscriber
    this.items.push('yeah ' + Math.round(Math.random() * 100))
  }
}
