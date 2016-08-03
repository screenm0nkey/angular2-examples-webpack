import {Component, ContentChildren, AfterContentInit, QueryList, Directive, ElementRef} from '@angular/core';

@Directive({selector: 'li'})
class SuperListDirective {
    constructor(private el:ElementRef) {}
}


@Component({
    selector: 'super-list',
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
class SuperListComponent implements AfterContentInit {
    @ContentChildren(SuperListDirective) items:QueryList<SuperListDirective>;
    count:number;
    showme:boolean = false;
    // use ngAfterViewInit() if you're doing a view query
    // ngAfterContentInit() is used because we're injecting the content using ngcontent
    ngAfterContentInit() {
        this.count = this.items.length;

        // will be called every time$ an item is added/removed from the 'items' list in my-component2 below,
        this.items.changes.subscribe((items:QueryList<ElementRef>) => {
            items.forEach((el:ElementRef) => console.log(el.nativeElement));
            this.showme = true;
            setTimeout(()=>this.showme = false, 2000);
        });
    }
}


// this is how the end user might implement the external component
@Component({
    selector: 'my-component2',                            // blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    directives: [SuperListComponent, SuperListDirective], // these two could be combined into one group of directives using multi-providers
    template: `                                            
      ${require('./problem-one-fix.html')}
      <button (click)="addItem()">Add an Item</button><br>
      <super-list>
          <li *ngFor="let item of items"> {{item}} </li>
      </super-list>
      ${require('./text.html')}
    `
})
export class FixComponent {
    public items:string[] = ['hello', 'world', 'today'];

    addItem() {
        // this will emit an chnage event to the SuperListComponent component subscriber
        this.items.push('yeah ' + Math.round(Math.random()*100))
    }
}
