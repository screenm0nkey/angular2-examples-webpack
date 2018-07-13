import {Directive, ElementRef, HostListener, Input} from "@angular/core";

/**
 * <span [myHighlight]="color" [defaultColor]="'violet'">
 */
@Directive({
  selector: "[myHighlight]",
  //inputs: ['tooltip'],
  host: {
    "(mouseenter)": "onMouseEnter()"
  }
})
export class Tooltip {
  @Input("myHighlight") highlightColor: string;
  private _defaultColor = "red";

  /**
   * see here for an explanation of this setter
   * https://angular.io/docs/ts/latest/guide/attribute-directives.html
   * example <span [myHighlight]="color" [defaultColor]="'violet'">
   * @param {string} colorName
   */
  @Input()
  set defaultColor(colorName: string) {
    this._defaultColor = colorName || this._defaultColor;
  }

  constructor(private el: ElementRef) {
  }

  onMouseEnter() {
    this._highlight(this.highlightColor || this._defaultColor);
  }

  /**
   * notice two different ways of binding to the host element...
   * 1. host : {"(mouseenter)": "onMouseEnter() }"
   * 2. @HostListener("mouseleave")
   */
  @HostListener("mouseleave")
  onMouseLeave() {
    this._highlight(null);
  }

  private _highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
