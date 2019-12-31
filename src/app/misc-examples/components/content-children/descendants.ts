import {Component, ContentChildren, Directive, Input, QueryList} from '@angular/core';

@Directive({selector: 'pane2'})
export class Pane2 {
  @Input() id !: string;
}

/**
 *
 */
@Component({
  selector: 'tab2',
  template: `
          <p class="file">misc-examples/components/content-children/tabs2.ts</p>
          <h4>How to reference a nested element in your component using <cur>descendants: true</cur></h4>

          <code> @ContentChildren(Pane,<cur>descendants: true</cur>) arbitraryNestedPanes !: QueryList</code>
          
          <div class="example top-level">Top level panes: {{serializedPanes}}</div>
          
          <p>This list is the same as above but uses <code><cur>descendants: true</cur></code>Use descendants to include all descendants</p>
          
          <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `
})
export class Tab2 {
  @ContentChildren(Pane2) topLevelPanes !: QueryList<Pane2>;
  // {descendants: true} to include all descendants, otherwise include only direct children
  @ContentChildren(Pane2, {descendants: true}) arbitraryNestedPanes !: QueryList<Pane2>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }

  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

/**
 *
 */
@Component({
  selector: 'content-children-descendants',
  template: `
      <collapse-it>
          <tab2>
              <pane2 id="1"></pane2>
              <pane2 id="2"></pane2>
              <pane2 id="3" *ngIf="shouldShow">
                  <tab2>
                      <pane2 id="3_1"></pane2>
                      <pane2 id="3_2"></pane2>
                  </tab2>
              </pane2>
          </tab2>
          <button (click)="show()">Show Descendants</button>
      </collapse-it>

  `,
})
export class ContentChildrenDescendants {
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}
