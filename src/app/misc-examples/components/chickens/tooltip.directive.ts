import { Directive, ElementRef, Input } from '@angular/core';


/**
 * <span [myTooltip]="color" [defaultColor]="'violet'">
 */
@Directive({
    selector: '[myHighlight]',
    //inputs: ['tooltip'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class Tooltip {
    @Input('myHighlight') highlightColor:string;
    private _defaultColor = 'red';

    // see here for an explanation of this setter
    // https://angular.io/docs/ts/latest/guide/attribute-directives.html
    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }

    constructor(private el:ElementRef) {}

    onMouseEnter() {
        this._highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this._highlight(null);
    }

    private _highlight(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}


