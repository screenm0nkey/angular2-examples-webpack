import {Component, ContentChildren, AfterContentInit, QueryList, Directive, ElementRef} from '@angular/core';

@Directive({selector: 'li'})
class SuperListDirective {
  constructor(private el: ElementRef) {
  }
}


@Component({
  selector: 'fix-super-list',
  template: `
    there are {{count}} items in the list
    <ul>
        <div *ngIf="showme" style="background-color: red; color : white; display:inline-block">
          Changes in the User's Component List (my-component2) list are being triggered in the SuperListComponent
        </div>
      <ng-content></ng-content>
    </ul>
  `
})
export class FixSuperListComponent implements AfterContentInit {
  @ContentChildren(SuperListDirective) items: QueryList<SuperListDirective>;
  count: number;
  showme: boolean = false;
  // use ngAfterViewInit() if you're doing a view query
  // use ngAfterContentInit() if you're injecting the content using ngcontent
  ngAfterContentInit() {
    this.count = this.items.length;

    // will be called every time$ an item is added/removed from the 'items' list in my-component2 below,
    this.items.changes.subscribe((items: QueryList<ElementRef>) => {
      items.forEach((el: ElementRef) => console.log(el.nativeElement));
      this.showme = true;
      setTimeout(() => this.showme = false, 2000);
    });
  }
}


// this is how the end user might implement the external component
@Component({
  selector: 'fix-my-component',                            // blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
  template: `                                            
      ${require('./problem-one-fix.html')}
      <button (click)="addItem()">Add an Item</button><br>
      <fix-super-list>
          <li *ngFor="let item of items"> {{item}} </li>
      </fix-super-list>
      ${require('./text.html')}
    `
})
export class FixMyComponent {
  public items: string[] = ['hello', 'world', 'today'];

  addItem() {
    // this will emit an chnage event to the SuperListComponent component subscriber
    this.items.push('yeah ' + Math.round(Math.random() * 100))
  }
}
