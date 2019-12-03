import { Component } from "@angular/core";

@Component({
  template: `
    <div class="comps">
      <collapse-it>
        <dynamic-component-example-01></dynamic-component-example-01>
      </collapse-it>

      <section collapse-it>
        <p class="file">
          misc-examples/components/chickens/directives/popup.directive.ts
        </p>
        <h4>Access a @Directive API using exportAs and local variables</h4>
        <button popup #popup1="popuppy" message="Socks">
          Socks - Click Me
        </button>
        <br />
        <button (click)="popup1.displayMessage2('Shirt')">
          I'm accessing the directive's API using a local variable
        </button>
        <br />
        <button popup #popup2="popuppy" message="Pants">
          Pants - Click me
        </button>
        <br />
        <button (click)="popup2.displayMessage2('Trousers')">
          I'm accessing the directive's API using a local variable
        </button>
      </section>

      <dom-adapter-component></dom-adapter-component>

      <snippet-component></snippet-component>

      <chicken-component></chicken-component>

      <section>
        <p class="file">
          misc-examples/components/chickens/directives/tooltip.directive.ts
        </p>
        <h4>directive example</h4>
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

        <span [myHighlight]="color" [defaultColor]="'violet'">
          <span [ngStyle]="{ 'background-color': color }"
            >highlight {{ color }}</span
          >
          Mouse over me. I'm a directive using the "host" property
        </span>
      </section>
    </div>
  `
})
export class ChickensMainComponent {
  color: string = "green";
  gender: string = "Female";
}
