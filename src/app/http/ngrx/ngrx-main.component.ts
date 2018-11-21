import {Component} from "@angular/core";

@Component({
  template: `
        <div class="comps">
            <ngrx-words-component></ngrx-words-component>
         
            <ngrx-clock-one-component></ngrx-clock-one-component>
            
            <ngrx-clock-two-component></ngrx-clock-two-component>
            
            <ngrx-people-component></ngrx-people-component>
            
            <ngrx-queue-component></ngrx-queue-component>
            
            <ngrx-in-ten></ngrx-in-ten>
        </div>
    `
})
export class NgrxMainComponent {
}
