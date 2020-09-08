import { Component, Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[counting]',
  host: {
    '(mouseenter)': 'showEvent($event)'
  }
})
export class CountClicks {
  numberOfClicks = 0;

  @HostListener('mouseup', ['$event'])
  onMouseup(evt: EventListenerObject) {
    console.log('mouseUp', evt);
  }

  @HostListener('click', ['$event.target'])
  onClick(btnElement: HTMLElement) {
    console.log(
      'button',
      btnElement,
      'number of clicks:',
      this.numberOfClicks++
    );
  }

  showEvent(evt: EventListenerObject) {
    console.log('mouseenter', evt);
  }
}

@Component({
  selector: 'host-two-component',
  template: `
    <p class="path">misc-examples/components/host-binding/host-two.ts</p>
    <h4>host:<cur></cur> and @HostListener</h4>
    <p>Show different ways to bind to a host elements events. <highlight>Look at console output</highlight></p>
    <button counting>@HostListener Increment</button>
  `
})
export class HostTwo {
  prop: String;
}
