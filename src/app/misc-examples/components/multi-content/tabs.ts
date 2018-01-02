import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from "@angular/core";

@Component({
  selector: "tab",
  template: `
  <div class="ui bottom attached tab segment" [class.active]="active" style="border: deepskyblue 3px solid">
      <ng-content></ng-content>
  </div>
  `
})
export class Tab {
  @Input("title") title: string;
  active: boolean = false;
}

@Component({
  selector: "tabset",
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="let tab of tabs"
       class="item"
       [class.active]="tab.active"
       (click)="setActive(tab)">
      {{ tab.title }}
    </a>
  </div>
  <div style="border: solid 3px deeppink">
    <ng-content></ng-content>
  </div>
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
    this.tabs.toArray().forEach(t => (t.active = false));
    tab.active = true;
  }
}

@Component({
  selector: "tabs-sample-app",
  template: `
    ${require("./tabs.html")}
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
      { title: "About", content: "This is the About tab" },
      { title: "Blog", content: "This is our blog" },
      { title: "Contact us", content: "Contact us here" }
    ];
  }
}
