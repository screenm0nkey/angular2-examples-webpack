import {
  AfterContentInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  QueryList
} from "@angular/core";

@Directive({ selector: "li" })
export class SuperListDirective {
  //make el public as it's accessed in "this.items.changes.subscribe"
  constructor(public el: ElementRef) {}
}

@Component({
  selector: "fix-super-list",
  template: `
    There are <h2>{{count}}</h2> items in the list.
    <div *ngIf="showme" style="background-color: red; color : white; display:inline-block">
        Changes in the FixMyComponent Lis list are being triggered in the FixSuperListComponent
    </div>
    <ul>
      <ng-content></ng-content>
    </ul>
  `
})
export class FixSuperListComponent implements AfterContentInit {
  @ContentChildren(SuperListDirective) items: QueryList<SuperListDirective>;
  count: number = 0;
  showme: boolean = false;
  // use ngAfterViewInit() if you're doing a view query
  // use ngAfterContentInit() if you're injecting the content using ngcontent
  ngAfterContentInit() {
    this.count = this.items.length;
    // will be called every time$ an item is added/removed from the 'items' list in add-to-list-component below,
    this.items.changes.subscribe((items: QueryList<SuperListDirective>) => {
      items.forEach((item: SuperListDirective) => {
        item.el.nativeElement.innerText += "-1";
      });
      this.count = this.items.length;
      this.showme = true;
      setTimeout(() => (this.showme = false), 2000);
    });
  }
}

// this is how the end user might implement the external component
@Component({
  selector: "fix-my-component",
  template: `   
    ${require("./text.html")}
    <button (click)="addItem()">Add an Item</button><br>
    <fix-super-list>
        <li *ngFor="let item of items"> {{item}} </li>
    </fix-super-list>
    `
})
export class FixMyComponent {
  public items: string[] = ["hello", "world", "today"];

  addItem() {
    // this will emit an chnage event to the SuperListComponent component subscriber
    this.items.push("yeah " + Math.round(Math.random() * 100));
  }
}
