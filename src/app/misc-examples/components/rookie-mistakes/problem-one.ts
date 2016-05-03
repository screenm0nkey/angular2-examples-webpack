import {Component, ContentChildren, AfterContentInit, QueryList, ElementRef } from '@angular/core';

@Component({
    selector: 'super-list',
    template: `
    there are {{count}} items in the list
    <ul>
      <ng-content></ng-content>
    </ul>
  `
})
class SuperListComponent implements AfterContentInit {
    // @ContentChildren allows us to target directives, components and local-refs
    // in content which has been inserted using ng-content. If the content was
    // just in the view then we could use @ViewChildren
    @ContentChildren('mylocalref') items: QueryList<ElementRef>;
    count :number;

    ngAfterContentInit() {
        this.count = this.items.length;
        this.items.forEach(el => console.log(el.nativeElement));
    }
}


// this is how the end user might implement the external component.
// we're forced to ask them to add a reference to their list items
// #mylocalref, which is not ideal
@Component({
    selector: 'my-component',
    directives : [SuperListComponent],
    template: `
        ${require('./problem-one.html')}
        <super-list>
            <li *ngFor="let item of items" #mylocalref> {{item}} </li>
        </super-list>
    `
})
export class MyComponent {
    public items:string[] = ['hello', 'world', 'today'];
}
