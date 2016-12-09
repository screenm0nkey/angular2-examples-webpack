import {Component} from '@angular/core';


@Component({
  selector: 'multi-content',
  template: `
    <h4>Demoing content projection</h4>
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
      <multi-content>
          <div header>
              This content is projected into the "header".    
              The body content below is a seperate component
          </div>
          <emitter-component body></emitter-component>
      </multi-content>  
      
      <hr>
      <transclusion-sample-app></transclusion-sample-app>
      
      <hr>
      <tabs-sample-app></tabs-sample-app>
    `,
})
export class MultiTransclusion {
}
