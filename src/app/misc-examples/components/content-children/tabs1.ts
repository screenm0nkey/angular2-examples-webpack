import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';

/**
 *
 */
@Component({
  selector: 'tab1',
  template: `
      <div class='' [class.active]='active' style='border: deepskyblue 3px solid'>
          <highlight>{{title}}</highlight> - <ng-content></ng-content>
      </div>
  `
})
export class ContentChildrenTab1 {
  @Input('title') title: string;
  active: boolean = false;
}


/**
 * TABSET
 */
@Component({
  selector: 'tabset1',
  template: `
      <section>
          <a *ngFor='let tab of tabs'
             class='item'
             [class.active]='tab.active'
             (click)='setActive(tab)'>
              {{ tab.title }}
          </a>
      </section>
      <div style='border: solid 3px purple'>
          <ng-content></ng-content>
      </div>
  `
})
export class ContentChildrenTabset1 implements AfterContentInit {
  @ContentChildren(ContentChildrenTab1) tabs: QueryList<ContentChildrenTab1>;

  // This lifecycle hook will be called once the contents of the child directives have been initialized.
  ngAfterContentInit() {
    // this.tabs.first.active = true;
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentChildrenTab1) {
    this.tabs.toArray().forEach(t => (t.active = false));
    tab.active = true;
  }
}

/**
 *
 */
@Component({
  selector: 'content-children-tabs',
  template: `
      <collapse-it>
          <p class="file">src/app/misc-examples/components/content-children/tabs1.ts</p>
          <h4>Tabset using @ContentChildren, QueryList, AfterContentInit</h4>

          <code>@ContentChildren(ContentChildrenTab1) tabs: QueryList <lgt>ContentChildrenTab1</lgt></code>
          <p>
              QueryList is a class provided by Angular and when we use QueryList with a @ContentChildren annotation
              Angular populates this with the components that match the query and then keeps the items
              up to date if the state of the application changes.
              However, QueryList requires a @ContentChildren to populate it, so let’s take a look at that now.
          </p>

          <p>
              On the tabs instance variable, we add the <code>@ContentChildren(ContentChildrenTab1)</code> annotation.
              This annotation will tell Angular to inject all the direct child directives (of the ContentChildrenTab1 type) into the tabs
              parameter.
              We then assign it to the tabs property of our component. With this we now have access to all the child ContentChildrenTab1
              components.
          </p>

          <tabset1>
              <tab1 title='First TAB'>
                  First TAB - I already exist in the HTML
              </tab1>
              <tab1 *ngFor='let tab of tabs' [title]='tab.title'>
                  {{ tab.content }}
              </tab1>
          </tabset1>
      </collapse-it>
  `
})
export class ContentChildrenTabs {
  tabs: any;

  constructor() {
    this.tabs = [
      {title: 'About TAB', content: 'This is the AboutComponent tab'},
      {title: 'Blog TAB', content: 'This is our blog'},
      {title: 'Contact TAB', content: 'Contact us here'}
    ];
  }
}
