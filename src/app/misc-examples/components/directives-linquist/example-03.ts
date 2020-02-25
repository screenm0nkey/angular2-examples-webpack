import {
  Component,
  Directive,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  OnDestroy
} from "@angular/core";

/**
 * TrackingService
 */
@Injectable({ providedIn: "root" })
export class TrackingService {
  logs = [];

  log(trackingEvent) {
    this.logs.push(trackingEvent);
  }
}

/**
 * OnlineService
 */
@Injectable({ providedIn: "root" })
export class OnlineService {
  online: boolean;
  interval: any;

  constructor() {
    this.online = true;
    this.interval = setInterval(
      () => (this.online = Math.random() > 0.5),
      1000
    );
  }

  clearInterval() {
    clearInterval(this.interval);
  }
}

/**
 * OnlineDirective
 */
@Directive({
  selector: "[online]"
})
export class OnlineDirective implements OnDestroy {
  @HostBinding("disabled")
  get functionCanBeCalledAnything() {
    // angular now watches the online property for changes
    return this.online.online;
  }

  @HostBinding("class.offline")
  get thisCanBeCalledAnything() {
    return this.online.online;
  }

  constructor(public online: OnlineService) {}

  public ngOnDestroy(): void {
    this.online.clearInterval();
  }
}

/**
 * TrackDirective
 */
@Directive({
  selector: "[track]"
})
export class TrackDirective {
  @Input() track;

  @HostListener("click") onClick = () =>
    this.tracking.log({ event: "click", message: this.track });

  @HostListener("mouseover") onMouseover = () =>
    this.tracking.log({ event: "mouseover", message: this.track });

  constructor(public tracking: TrackingService) {}
}

/**
 * Example03AppComponent
 */
@Component({
  selector: "track-app",
  styleUrls: ["./styles.css"],
  template: `
    <p class="path">misc-examples/components/directives-linquist/example-03</p>
    <h4>Combine Directive @HostBinding with Services</h4>

    <p>Wiggle mouse over the buttons and they will log when they are not disabled</p>

    <button online [track]="'1 Button'">One</button>
    <button online [track]="'2 Button'">Two</button>
    <button online [track]="'3 Button'">Three</button>

    <!-- Only for visuals-->
    <div *ngFor="let log of tracking.logs">
      {{ log.event }} - {{ log.message }}
    </div>
  `
})
export class Example03AppComponent {
  // tracking is used in template
  constructor(tracking: TrackingService) {}
}
