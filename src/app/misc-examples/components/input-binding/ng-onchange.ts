import { Component, Input, OnChanges, SimpleChange } from "@angular/core";

@Component({
  selector: "version-child",
  template: `
    <h5>Version {{major}}.{{minor}}</h5>
    <h5>Change log:</h5>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    console.log("%cngOnChanges", "color:green", changes);
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue) || 0;
      let to = JSON.stringify(changedProp.currentValue);
      log.push(`${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(", "));
  }
}

@Component({
  selector: "version-parent",
  template: `
    <p class="file">misc-examples/components/input-binding/ng-onchange.ts</p>
    <h4>Using <code>ngOnChanges</code>, <code>@Input</code> and the SimpleChange object</h4>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <version-child [major]="major" [minor]="minor"></version-child>
  `
})
export class VersionParentComponent {
  major: number = 1;
  minor: number = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
