import { Component, OnInit } from "@angular/core";

interface Style {
  "background-color": string;
  "border-radius": string;
  border?: string;
  width?: string;
  height?: string;
}

@Component({
  selector: "ng-style-demo",
  template: `
    <section>
      <p class="path">misc-examples/components/ng-style/ng-style.ts</p>
      <h4>Using ngStyle demo</h4>
      <div [style.background-color]="yellow">
        Uses fixed yellow background
      </div>
      <div [ngStyle]="{ color: 'white', 'background-color': 'blue' }">
        Uses fixed white text on blue background
      </div>

      <hr />
      <p [ngStyle]="style">
        This is styled using properties assigned to <code>this.style</code>
      </p>
      <hr />

      <div>
        <span [ngStyle]="{ color: 'red' }" [style.font-size.px]="fontSize">
          Change the font size below.
        </span>
      </div>

      <div>
        <span [ngStyle]="{ color: color }"> {{ color }} text </span>
      </div>
      <div [style.background-color]="color" style="color: white;">
        {{ color }} background
      </div>
      <div class="ui input">
        Font Color
        <input type="text" name="color" value="{{ color }}" #colorinput />
      </div>
      <div class="ui input">
        Font Size
        <input type="text" name="fontSize" value="{{ fontSize }}" #fontinput />
      </div>
      <button
        class="ui primary button"
        (click)="apply(colorinput.value, fontinput.value)"
      >
        Apply settings
      </button>
    </section>
  `
})
export class NgStyleSampleApp implements OnInit {
  color: string;
  fontSize: number;
  style: Style;

  ngOnInit() {
    this.fontSize = 16;
    this.color = "blue";
    this.style = {
      "background-color": "gold",
      "border-radius": "5px",
      height: "30px",
      width: "500px"
    };
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
}
