import {Component} from "@angular/core";

@Component({
  selector: 'change-detection-main',
  template: `
      <div class="comps">
        <change-component></change-component>
        
        <immutable-object-component></immutable-object-component>
        
        <immutable-list-component></immutable-list-component> 
               
        <mark-for-check></mark-for-check>
        
        <detect-changes></detect-changes>
        
        <parent-obs></parent-obs>
        
        <change-detection-sample-app></change-detection-sample-app>
        
        <observable-change-detection-sample-app></observable-change-detection-sample-app>
      </div>
    `,
})
export class ChangeDetectionMain {
}
