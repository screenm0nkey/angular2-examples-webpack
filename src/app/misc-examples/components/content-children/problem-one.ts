import {AfterContentInit, Component, ContentChildren, ElementRef, QueryList} from '@angular/core';

// SuperList component would be our library, that an end user is using.
@Component({
  selector: 'super-list',
  template: `
      There are <span class="bold">{{count}}</span> items in the list
      <ul>
          <ng-content></ng-content>
      </ul>
  `
})
export class SuperListComponent implements AfterContentInit {
  // @ContentChildren allows us to target directives, components and local-refs
  // in content which has been inserted using ng-content. If the content was
  // just in the view then we could use @ViewChildren
  @ContentChildren('mylocalref') items: QueryList<ElementRef>;
  count: number;

  // this is used for ng-content
  ngAfterContentInit() {
    this.count = this.items.length;
    this.items.forEach((el: ElementRef) => console.log(el.nativeElement));
  }
}

// this is how the end user might implement the external component.
// we're forced to ask them to add a reference to their list items
// #mylocalref, which is not ideal
@Component({
  selector: 'problem-one',
  template: `
      <collapse-it>
          <p class='file'>misc-examples/components/content-children/problem-one.ts</p>
          <h4>How to reference an element a user projects into your component using a local reference QueryList
              <lgt>ElementRef</lgt>
          </h4>
          <dlink [id]="24"></dlink>

          <p>What if you need a reference to an element that isn't in your component's template?</p>

          <p>As an example, let's imagine you have a list component that accepts custom list items
              through content projection, and you'd like to track the number of list items.</p>

          <p><highlight>You can use <code>@ContentChildren</code> query to search your component's 'content'
              (i.e. the nodes projected into the component)</highlight> but because the content is
              arbitrary, it's not possible to label the nodes with local variables yourself.</p>

          <p>@ContentChildren allows us to target directives, components and local-refs
              in content which has been inserted using ng-content. If the content was
              just in the view then we could use @ViewChildren</p>

          <p>One option is to ask your users to label each of their list items with a
              pre-agreed-upon variable, like '#mylocalref', which the example below uses.</p>

          <div class="example">
              <super-list>
                  <li *ngFor='let item of items' #mylocalref> {{item}}</li>
              </super-list>
          </div>

          <p>However, this solution isn't ideal because it requires users to write
              some extra boilerplate nad they must be aware of the required local ref.</p>

          <p>What would be better is an API with regular li tags
              and no attributes. See <highlight>misc-examples/components/content-children/problem-one-fix.ts</highlight>,
              to see how can we make this work</p>
      </collapse-it>
  `
})
export class ProblemOneComponent {
  public items: string[] = ['hello', 'world', 'today'];
}
