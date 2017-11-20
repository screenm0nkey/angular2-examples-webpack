import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from "@angular/core";


@Component({
  selector: 'keep-count',
  template: `<h5>{{count}}</h5>`
})
export class KeepCountComponent {
  private count: number = 0;

  updateCount(num: number) {
    // if we don't wrap this in a timeout we will get an "ExpressionChangedAfterItHasBeenCheckedError"
    // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
    setTimeout(()=>this.count = num,0)
  }
}


@Component({
  selector: 'super-item',
  template: `
    <li>{{name}}</li>`
})
export class SuperItemComponent {
  @Input('name') name: string;
}


@Component({
  selector: 'add-to-list-component',
  template: `
    <p class="file">misc-examples/components/view-children/add-to-list.ts</p>
    <h4>@ViewChildren and @ViewChild</h4>
    <button (click)="addItem()">Add Item</button>
    <ul>
      <super-item *ngFor="let item of items" [name]="item"></super-item>
    </ul>
    <pre #myref></pre>
    <keep-count></keep-count>
  `
})
export class ViewChildrenComponent implements AfterViewInit {
  @ViewChildren(SuperItemComponent) children: QueryList<SuperItemComponent>;
  @ViewChild(KeepCountComponent) private keepCount: KeepCountComponent;
  @ViewChild('myref') el: ElementRef;

  public items: string[] = ['hello', 'world', 'today'];

  // use ngAfterViewInit() if you're using viewChild /viewChildren
  // use ngAfterContentInit() if you're injecting the content using ngcontent>
  ngAfterViewInit() {
    this.updatePreInfo(this.children.length);
    this.children.changes.subscribe((items: SuperItemComponent[]) => {
      // items.forEach((item: SuperItemComponent) => console.log(item.name));
      this.updatePreInfo(items.length);
    });
  }

  updatePreInfo(length) {
    this.el.nativeElement.innerHTML = `Items = ${length}`;
    this.keepCount.updateCount(length)
  }

  addItem() {
    // this will emit an change event to the SuperListComponent component subscriber
    this.items.push('yeah ' + Math.round(Math.random() * 100))
  }
}
