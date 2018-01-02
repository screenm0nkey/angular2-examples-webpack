import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList
} from "@angular/core";

// SuperList component would be our library that an end user us using.
@Component({
  selector: "super-list",
  template: `
    there are {{count}} items in the list
    <ul>
      <ng-content></ng-content>
    </ul>
  `
})
export class SuperListComponent implements AfterContentInit {
  // @ContentChildren allows us to target directives, components and local-refs
  // in content which has been inserted using ng-content. If the content was
  // just in the view then we could use @ViewChildren
  @ContentChildren("mylocalref") items: QueryList<ElementRef>;
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
  selector: "my-component",
  template: `
    <p class="file">misc-examples/components/content-children/problem-one.ts</p>
    <h4>Scenario: You need a reference to an element a user projects into your component using ng-content</h4>
    <a href="http://angularjs.blogspot.co.uk/2016/04/5-rookie-mistakes-to-avoid-with-angular.html" target="_blank">Rookie Mistakes</a>
    
    <p><code>@ContentChildren</code> allows us to target "local-refs" in content which has been inserted using ng-content. 
    If the content was just in the view then we could use <code>@ViewChildren</code></p>
    
    <p>
     QueryList is a class provided by Angular and when we use QueryList with a @ContentChildren annotation
   Angular populates this with the components that match the query and then keeps the items
   up to date if the state of the application changes.
  </p>
    
    <p>What if you need a reference to an element that isn't in your component's template?
    As an example, let's imagine you have a list component that accepts custom list items
    through content projection, and you'd like to track the number of list items.</p>
    
    <p><strong>You can use a <code>@ContentChildren</code> query to search your component's "content"
    (i.e. the nodes projected into the component)</strong> but because the content is
    arbitrary, it's not possible to label the nodes with local variables yourself
      (as in the last example).</p>
    
    <p>One option is to ask your users to label each of their list items with a
    pre-agreed-upon variable, like "#mylocalref", which the example below uses.</p>
    
    <p>However, this solution isn't ideal because it requires users to write
    some extra boilerplate.  You may prefer an API with regular li tags
    and no attributes. See below to see how can we make this work</p>

    <super-list>
        <li *ngFor="let item of items" #mylocalref> {{item}} </li>
    </super-list>
    `
})
export class MyComponent {
  public items: string[] = ["hello", "world", "today"];
}
