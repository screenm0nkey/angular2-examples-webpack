import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'cur',
  template: `<span #text><ng-content></ng-content></span>`,
})
export class BraceComponent {
  @ViewChild('text') textElement: ElementRef;

  ngAfterViewInit() {
    this.textElement.nativeElement.innerHTML = `&#123;${this.textElement.nativeElement.innerHTML}&#125;`
  }
}


@Component({
  selector: 'lgt',
  template: `<span #text><ng-content></ng-content></span>`,
})
export class HtmComponent {
  @ViewChild('text') textElement: ElementRef;

  ngAfterViewInit() {
    this.textElement.nativeElement.innerHTML = `&lt;${this.textElement.nativeElement.innerHTML}&gt;`
  }
}


@Component({ 
  selector: 'path',
  template: `<p class="path" #text><ng-content></ng-content></p>`,
})
export class PathComponent {
  @ViewChild('text') textElement: ElementRef;

  ngAfterViewInit() {
    let html = this.textElement.nativeElement.innerHTML;
    html = html.replace('src/app/', '');
    this.textElement.nativeElement.innerHTML = html;

  }
}


@Component({
  selector: 'highlight',
  template: `<ng-content class="highlight"></ng-content>`,
})
export class HighlightComponent {
}




