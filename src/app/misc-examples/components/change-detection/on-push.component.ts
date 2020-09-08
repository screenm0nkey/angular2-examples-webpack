import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

class Profile {
  constructor(public first: string, public last: string) {
  }

  lastChanged() {
    return new Date();
  }
}

@Component({
  selector: 'default',
  template: `
    <h5>
      Default Strategy
    </h5>

    <form class='ui form'>
      <div class='field'>
        <label>First Name</label>
        <input
          type='text'
          [(ngModel)]='profile.first'
          name='first'
          placeholder='First Name'>
      </div>
      <div class='field'>
        <label>Last Name</label>
        <input
          type='text'
          [(ngModel)]='profile.last'
          name='last'
          placeholder='Last Name'>
      </div>
    </form>
    <div>
      View checked {{count}} times <br>
      {{profile.lastChanged() | date:'medium'}}
    </div>
  `
})
export class DefaultCmp {
  @Input() profile: Profile;
  count: number = 0;

  ngDoCheck() {
    this.count++;
  }
}

@Component({
  selector: 'on-push',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h5>
      OnPush Strategy
    </h5>

    <form class='ui form'>
      <div class='field'>
        <label>First Name</label>
        <input
          type='text'
          [(ngModel)]='profile.first'
          name='first'
          placeholder='First Name'>
      </div>
      <div class='field'>
        <label>Last Name</label>
        <input
          type='text'
          [(ngModel)]='profile.last'
          name='last'
          placeholder='Last Name'>
      </div>
    </form>
    <div>
      View checked {{count}} times <br>
      {{profile.lastChanged() | date:'medium'}}
    </div>
  `
})
export class OnPushCmp {
  @Input() profile: Profile;
  count: number = 0;

  ngDoCheck() {
    this.count++;
  }
}

@Component({
  selector: 'change-detection-sample-app',
  template: `
    <collapse-it>
    <p class="path">/misc-examples/components/change-detection/onpush.ts</p>
    <h4>Change detection using ngModel</h4>
    <div class='ui page grid'>
      <div class='two column row'>
        <div class='column area'>
          <default [profile]='profile1'></default>
        </div>
        <div class='column area'>
          <on-push [profile]='profile2'></on-push>
        </div>
      </div>
    </div>
    </collapse-it>
  `
})
export class OnPushChangeDetectionSampleApp {
  profile1: Profile = new Profile('Felipe', 'Coury');
  profile2: Profile = new Profile('Nate', 'Murray');
}
