import { Component } from "@angular/core";

@Component({
  selector: "app",
  styleUrls: ["./main.css"],
  template: `
    <div class="comps">
      <collapse-it>
        <ngx-socket-example></ngx-socket-example>
      </collapse-it>

      <section collapse-it>
        <h4>{{ description }}</h4>

        <push-notification
          #notification
          title="ng2-notifications"
          body="Native Push Notifications in Angular 2"
          icon="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
          closeDelay="4000"
          (load)="notification.show()"
        >
        </push-notification>

        <button (click)="notification.show(); logit(notification)">
          Click to Show Notification (look at console)
        </button>
      </section>
    </div>
  `
})
export class AppComponent {
  title: string = "ng2-notifications";
  description: string = "Angular 2 Component for Native Push Notifications";

  logit(arg) {
    console.log(arg);
  }
}
