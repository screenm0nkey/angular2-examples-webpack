import {Component} from "@angular/core";


@Component({
  selector: 'multi-content',
  template: `
    <p class="file">misc-examples/components/multi-content/named-content.ts</p>
    <h4>Multi content projection (transclusion)</h4>
    <div class="box">
    <code>&lt;ng-content select="[header]"&gt;&lt;/ng-content&gt;</code>
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="box">
      <code>&lt;ng-content select="[body]"&gt;&lt;/ng-content&gt;</code>
      <p>Content here is generated by a separate emitter-component.</p>
      <ng-content select="[body]"></ng-content>
    </div>
  `,
  styles: [`
        .box {
          min-height: 30px;
          border: 5px solid purple;
          display: block;
          margin-bottom : 10px;
        }
    `]
})
export class ContentProjectionComponent {
}


@Component({
  template: `
    <div class="comps">
      <multi-content>
        <div header>
          This content is projected into the "header".
          The body content below is a separate component.
        </div>
        <emitter-component body></emitter-component>
      </multi-content>
    
      <transclusion-simple></transclusion-simple>
    
      <tabs-sample-app></tabs-sample-app>
    
      <accordian-component></accordian-component>
    </div>
  `
})
export class MultiTransclusion {
}