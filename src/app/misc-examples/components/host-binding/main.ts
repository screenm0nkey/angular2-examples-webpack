import {Component} from "@angular/core";

@Component({
  styles: [`h4 {font-weight: bold;color:darkred}`],
  template: `
        <div class="comps">
        
        <host-one-component></host-one-component>
        
        
        <host-one-part-two-component></host-one-part-two-component>
        
        
        <host-two-component></host-two-component>
        
       
        <host-three-component></host-three-component>
     
        </div>
    `,
})
export class HostBindingComponent {
}
