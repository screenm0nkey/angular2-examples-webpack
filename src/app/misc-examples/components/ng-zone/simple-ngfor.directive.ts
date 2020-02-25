import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

class SimpleNgForRow {
  constructor(public $implicit: any, public index: number) {}

  get even(): boolean {
    return this.index % 2 === 0;
  }

  get odd(): boolean {
    return !this.even;
  }
}

@Directive({ selector: "[simpleNgFor][simpleNgForOf]" })
export class SimpleNgFor implements DoCheck {
  @Input() simpleNgForOf: any[];

  constructor(
    public _viewContainer: ViewContainerRef,
    public _template: TemplateRef<SimpleNgForRow>
  ) {}

  // see here for an explanation of this setter
  // https://angular.io/docs/ts/latest/guide/attribute-directives.html
  // or see the highlight directive example in this app
  @Input()
  set ngForTemplate(value: TemplateRef<SimpleNgForRow>) {
    console.log(`%c${value}`, "color:lime");
    if (value) {
      this._template = value;
    }
  }

  ngDoCheck() {
    const oldLen = this._viewContainer.length;
    const newLen = this.simpleNgForOf.length;
    const minLen = Math.min(oldLen, newLen);

    // update existing rows
    for (let i = 0; i < minLen; i++) {
      const row = this.simpleNgForOf[i];
      const viewRef = <EmbeddedViewRef<SimpleNgForRow>>(this._viewContainer.get(i));
      viewRef.context.$implicit = row;
    }

    // add missing rows
    for (let i = oldLen; i < newLen; i++) {
      const row = this.simpleNgForOf[i];
      this._viewContainer.createEmbeddedView(
        this._template,
        new SimpleNgForRow(row, i)
      );
    }

    // remove superfluous rows
    for (let i = oldLen - 1; i >= newLen; i--) {
      this._viewContainer.remove(i);
    }
  }
}
