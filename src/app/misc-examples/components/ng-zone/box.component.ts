import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:rect
      #rect
      [attr.dataId]='box.id'
      [attr.x]='box.x'
      [attr.y]='box.y'
      width='20'
      height='20'
      stroke='black'
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth='1'></svg:rect>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements AfterViewInit {
  @Input() box;
  @Input() selected;

  // make the box component instance available on event.target,
  // where target is the underlying SVG rect element, so we can access it in speedy.component.ts
  @ViewChild('rect')
  set rect(value: ElementRef) {
    if (value) {
      value.nativeElement['BoxComponent'] = this;
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  update() {
    this.changeDetectorRef.detectChanges();
  }
}
