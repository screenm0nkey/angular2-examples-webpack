import { Component } from "@angular/core";

@Component({
    template: `
        <div class="comps">
        <collapse-it>
            <chicken-component></chicken-component>
        </collapse-it>

        <collapse-it>
            <custom-decorator></custom-decorator>
        </collapse-it>

        <collapse-it>
            <p class="file">
            misc-examples/components/chickens/directives/tooltip.directive.ts
            </p>
            <h4>Directive example using @Input, @Hostlistener and getter</h4>
            <dlink [id]="41"></dlink>
            <div>
            <input
                [(ngModel)]="color"
                value="green"
                type="radio"
                name="color"
            />Green
            <input
                [(ngModel)]="color"
                value="yellow"
                type="radio"
                name="color"
            />Yellow
            <input
                [(ngModel)]="color"
                value="cyan"
                type="radio"
                name="color"
            />Cyan
            </div>
            <!--color is a propety on the controller set by the radio buttons-->
            <code>
            <lgt>span [myTooltip]="color" [defaultColor]="'violet'"</lgt>
            </code>

            <p [myHighlight]="color" [defaultColor]="'violet'">
            Mouse over me. I'm a directive using the "host" property
            </p>
            <p [ngStyle]="{ 'background-color': color }">highlight {{ color }}</p>

        </collapse-it>
        </div>
  `
})
export class ChickensMainComponent {
    color: string = "green";
    gender: string = "Female";
}
