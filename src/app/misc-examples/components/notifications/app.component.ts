import {Component} from "@angular/core";

@Component({
  selector: "app",
  styles: [require("./app.component.css")],
  template: require("./app.component.html")
})
export class AppComponent {
  title: string = "ng2-notifications";
  description: string = "Angular 2 Component for Native Push Notifications";

  logit(arg) {
    console.log(arg);
  }
}
