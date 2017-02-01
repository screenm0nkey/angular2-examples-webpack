import {Component, QueryList, AfterContentInit, Input, ContentChildren} from "@angular/core";

@Component({
  selector: 'tab',
  template: `
  <div class="ui bottom attached tab segment" [class.active]="active">
    <ng-content></ng-content>
  </div>
  `
})
export class Tab {
  @Input('title') title: string;
  active: boolean = false;
}


@Component({
  selector: 'tabset',
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="let tab of tabs"
       class="item"
       [class.active]="tab.active"
       (click)="setActive(tab)">
      {{ tab.title }}
    </a>
  </div>
  <ng-content></ng-content>
  `
})
export class Tabset implements AfterContentInit {
  @ContentChildren(Tab) tabs: QueryList<Tab>;
  // This lifecycle hook will be called
  // once the contents of the child directives have been initialized.
  ngAfterContentInit() {
    //this.tabs.first.active = true;
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: Tab) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}


@Component({
  selector: 'tabs-sample-app',
  template: `
  <pre>@ContentChildren(Tab) tabs: QueryList&lt;Tab&gt;</pre>
  <p>
   QueryList is a class provided by Angular and when we use QueryList with a @ContentChildren annotation
 Angular populates this with the components that match the query and then keeps the items
 up to date if the state of the application changes.
 However, QueryList requires a @ContentChildren to populate it, so let’s take a look at that now.
 On the tabs instance variable, we add the @ContentChildren(Tab) annotation. 
 This annotation will tell Angular to inject all the direct child directives (of the Tab type) into the tabs parameter. 
 We then assign it to the tabs property of our component. With this we now have access to all the child Tab components.
</p>
  <tabset>
    <tab title="First tab">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Quibusdam magni quia ut harum facilis, ullam deleniti porro
      dignissimos quasi at molestiae sapiente natus, neque voluptatum
      ad consequuntur cupiditate nemo sunt.
    </tab>
    <tab *ngFor="let tab of tabs" [title]="tab.title">
      {{ tab.content }}
    </tab>
  </tabset>
  `
})
export class TabsSampleApp {
  tabs: any;

  constructor() {
    this.tabs = [
      {title: 'About', content: 'This is the About tab'},
      {title: 'Blog', content: 'This is our blog'},
      {title: 'Contact us', content: 'Contact us here'},
    ];
  }
}
