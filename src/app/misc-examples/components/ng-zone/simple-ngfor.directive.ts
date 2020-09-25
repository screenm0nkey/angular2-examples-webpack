import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

class SimpleNgForRow {
  constructor(public $implicit: any, public index: number) { }

  get even(): boolean {
    return this.index % 2 === 0;
  }

  get odd(): boolean {
    return !this.even;
  }
}

@Directive({
  selector: "[simpleNgFor]",
  inputs: ["simpleNgForOf"]
})
export class SimpleNgFor implements DoCheck {
  // items holds the collection we’re iterating on
  @Input() simpleNgForOf: any[];

  constructor(
    public viewContainerRef: ViewContainerRef,
    public templateRef: TemplateRef<SimpleNgForRow>
  ) { }

  ngDoCheck() {
    const oldLen = this.viewContainerRef.length;
    const newLen = this.simpleNgForOf.length;
    const minLen = Math.min(oldLen, newLen);

    // update existing rows
    for (let i = 0; i < minLen; i++) {
      const row = this.simpleNgForOf[i];
      const viewRef = <EmbeddedViewRef<SimpleNgForRow>>(this.viewContainerRef.get(i));
      viewRef.context.$implicit = row;
    }

    // add missing rows
    for (let i = oldLen; i < newLen; i++) {
      const row = this.simpleNgForOf[i];
      this.viewContainerRef.createEmbeddedView(
        this.templateRef,
        new SimpleNgForRow(row, i)
      );
    }

    // remove superfluous rows
    for (let i = oldLen - 1; i >= newLen; i--) {
      this.viewContainerRef.remove(i);
    }
  }
}
