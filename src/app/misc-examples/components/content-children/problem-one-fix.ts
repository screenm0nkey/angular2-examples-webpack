import {AfterContentInit, Component, ContentChildren, Directive, ElementRef, QueryList} from '@angular/core';

@Directive({selector: 'li'})
export class SuperListDirective {
  // make el public as it's accessed in 'this.items.changes.subscribe'
  constructor(public el: ElementRef) {
  }
}

@Component({
  selector: 'fix-super-list',
  template: `
      There are <h2>{{count}}</h2> items in the list.
      <div *ngIf='showme' style='background-color: red; color : white; display:inline-block'>
          Changes in the FixMyComponent list are being triggered in the SuperListFixComponent
      </div>
      <ul>
          <ng-content></ng-content>
      </ul>
  `
})
export class SuperListFixComponent implements AfterContentInit {
  @ContentChildren(SuperListDirective) items: QueryList<SuperListDirective>;
  count = 0;
  showme = false;
  // use ngAfterViewInit() if you're doing a view query
  // use ngAfterContentInit() if you're injecting the content using ngcontent
  ngAfterContentInit() {
    this.count = this.items.length;
    // will be called every time an item is added/removed from the 'items' list in add-to-list-component below,
    this.items.changes.subscribe((items: QueryList<SuperListDirective>) => {
      items.forEach((item: SuperListDirective) => {
        item.el.nativeElement.innerText += '-1';
      });
      this.count = this.items.length;
      this.showme = true;
      setTimeout(() => (this.showme = false), 2000);
    });
  }
}

// this is how the end user might implement the external component
@Component({
  selector: 'problem-one-fix',
  template: `
      <collapse-it>
          <p class="file">misc-examples/components/content-children/problem-one-fix.ts</p>
          <h4>How to reference an element a user projects into your component by subscribing to a custom directive
              QueryList
              <lgt>SuperListDirective</lgt>
          </h4>

          <p>
              One great solution is to take advantage of the selector in the <code>@Directive</code> decorator.
              You simply define a directive that selects
              <lgt>li</lgt>
              elements, then use a @ContentChildren query to filter all
              <lgt>li</lgt>
              elements down to only those that are content children of the component.
          </p>
          <p>
              Note: It seems like it might work to select for only
              <lgt>li</lgt>
              elements
              within
              <lgt>my-list</lgt>
              tags (e.g. "my-list li"), but it's important to note
              that parent-child selectors aren't yet supported. If you want to
              limit the results to children of your component, using queries to filter is the best way.
          </p>

          <p class="strong">Using <code>ngOnChanges</code> to detect query list changes, is similar to $scope.$watch in
              AngularJS</p>

          <p>In Angular 1, if you wanted to be notified when a value changed, you'd have to set a
              $scope.$watch and manually check for changes each digest cycle. In Angular 2, the
              <code>ngOnChanges</code> hook greatly simplifies this process. Once you define an <code>ngOnChanges</code>
              method
              in your component class, it will be called whenever the component's inputs change.
              This comes in very handy.</p>

          <p>However, the <code>ngOnChanges</code> method executes only when the component's inputs change --
              specifically,
              those items you have included in your inputs array or explicitly labeled with an @Input decorator.
              <strong>It will not be called when items are added or removed from <code>@ViewChildren</code> or
                  <code>@ContentChildren</code> query
                  lists.</strong></p>

          <p class="strong">If you want to be notified of changes in a query list, don't use <code>ngOnChanges</code>.
              Instead
              subscribe
              to the query list's built-in observable, its "changes" property. As long as you do so in the
              proper lifecycle hook, not the constructor, you will be notified whenever an item is added or removed.</p>
          
          <div class="example">
              <button (click)='addItem()'>Add an Item</button>
              <fix-super-list>
                  <li *ngFor='let item of items'> {{item}}</li>
              </fix-super-list>
          </div>
      </collapse-it>

  `
})
export class ProblemOneFixComponent {
  public items: string[] = ['hello', 'world', 'today'];

  addItem() {
    // this will emit an chnage event to the SuperListComponent component subscriber
    this.items.push('yeah ' + Math.round(Math.random() * 100));
  }
}
