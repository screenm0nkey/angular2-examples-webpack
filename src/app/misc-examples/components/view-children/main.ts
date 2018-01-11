import {Component} from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <div class="info">
        <p class="file">src/app/misc-examples/components/view-children/main.ts</p>
        <div class="links">
          <a routerLink="/misc/input-binding">Access a child component from the parent using local variable</a>
          <a routerLink="/misc/directives">Linquists directive examples 6,7 and 8 have good @viewChild uses.</a>
        </div>
        SOme examples...
        <pre>
@ViewChild("myref") el: ElementRef;
@ViewChild("header") headerTemplate: TemplateRef&lt;any&gt;
@ViewChild("vc", &#123;read: ViewContainerRef&#125;) vc;
@ViewChild(ChildViewComponent) viewChild: ChildViewComponent;
@ViewChild(OnChangesComponent) childView: OnChangesComponent;
@ViewChild(KeepCountComponent) private keepCount: KeepCountComponent;</pre>
      </div>
      
      <add-to-list-component></add-to-list-component>
      <countdown-parent-vc></countdown-parent-vc>
    </div>
  `
})
export class MainChildrenApp {
}
