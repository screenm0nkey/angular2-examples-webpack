import {Component} from "@angular/core";

@Component({
  template: `
      <hr>
      <lifecycle-sample-app-4></lifecycle-sample-app-4>
      <hr>
      <lifecycle-sample-app-1></lifecycle-sample-app-1>
      <hr style="margin-top: 20px">
      <lifecycle-sample-app-2></lifecycle-sample-app-2>
      <hr>
      <do-check></do-check>
    `,
})
export class MiscLifecycleMain {
}