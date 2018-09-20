import {Component} from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./main.css'],
  template: `
    <div  class='comps'>
      <socket-io-app></socket-io-app>
      
      <section>
        <h4>{{ description }}</h4>

        <push-notification
          #notification
          title='ng2-notifications'
          body='Native Push Notifications in Angular 2'
          icon='https:// goo.gl/3eqeiE'
          closeDelay='4000'
          (load)='notification.show()'>
        </push-notification>

        <button 
          (click)='notification.show(); logit(notification)'>
            Click to Show Notification (look at console)
        </button>
      </section>
    </div>
  `
})
export class AppComponent {
  title: string = 'ng2-notifications';
  description: string = 'Angular 2 Component for Native Push Notifications';

  logit(arg) {
    console.log(arg);
  }
}
