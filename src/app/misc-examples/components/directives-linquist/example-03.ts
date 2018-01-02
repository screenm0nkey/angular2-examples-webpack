import {
  Component,
  Directive,
  HostBinding,
  HostListener,
  Injectable,
  Input
} from "@angular/core";

@Injectable()
export class TrackingService {
  logs = [];

  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}

@Injectable()
export class OnlineService {
  online = true;

  constructor() {
    setInterval(() => {
      this.online = Math.random() > 0.5;
    }, 1000);
  }
}




@Directive({
  selector: "[online]"
})
export class OnlineDirective {
  @HostBinding("disabled")
  get functionCanBeCalledAnything() {
    return this.online.online;
  }

  @HostBinding("class.offline")
  get thisCanBeCalledAnything() {
    return this.online.online;
  }

  constructor(private online: OnlineService) {}
}




@Directive({
  selector: "[track]"
})
export class TrackDirective {
  @Input() track;

  @HostListener("click")
  onClick() {
    this.tracking.log({ event: "click", message: this.track });
  }

  @HostListener("mouseover")
  onMouseover() {
    this.tracking.log({ event: "mouseover", message: this.track });
  }

  constructor(private tracking: TrackingService) {}
}



@Component({
  selector: "track-app",
  styles: [require("./styles.css")],
  template: `
    <p class="path">src/app/misc-examples/components/directives-linquist/example-03</p>
    <h4>Combine @HostBinding with services</h4>
    <button online [track]="'One Button'">One</button>
    <button online [track]="'Two Button'">Two</button>
    <button online [track]="'Three Button'">Three</button>
    
    <!-- Only for visuals-->
    <div *ngFor="let log of tracking.logs">
      {{log.event}} - {{log.message}}
    </div>    
  `
})
export class Example03AppComponent {
  //only for visuals
  constructor(private tracking: TrackingService) {}
}
