import { Component, Directive, HostListener} from '@angular/core';

@Directive({
    selector: 'button[counting]',
    host: {
        '(mouseenter)': 'showEvent($event)'
    }
})
class CountClicks {
    numberOfClicks = 0;

    @HostListener('mouseup', ['$event'])
    onMouseup(evt:EventListenerObject) {
        console.log("mouseUp", evt);
    }

    @HostListener('click', ['$event.target'])
    onClick(btnElement:HTMLElement) {
        console.log("button", btnElement, "number of clicks:", this.numberOfClicks++);
    }

    showEvent(evt:EventListenerObject) {
        console.log('mouseenter',evt);
    }
}


@Component({
    selector: 'host-two-component',
    template: `
        <p>Show different ways to bind to a host elements events. <strong>Look at console output</strong></p>
        <button counting>@HostListener Increment</button>
        `,
    directives: [CountClicks]
})
export class HostTwo {
    prop:String;
}