import {Component} from '@angular/core'

@Component({
  selector: 'multi-content',
  template: `
    <h3>Demoing content projection</h3>
    <div class="box">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="box">
      <ng-content select="[body]"></ng-content>
    </div>
  `,
  styles: [`
        .box {
          min-height: 30px;
          border: 1px solid black;
          display: block;
        }
    `]
})
export class ContentProjectionComponent {
}
