import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

declare const Notification;

// this is a bug fix to stop this issue
// https://github.com/socketio/socket.io-client/issues/1166
(window as any).global = window;

@Component({
  selector: 'push-notification',
  styles: [':host { display: none; font-family: Arial; }'],
  template: ''
})
export class PushNotificationComponent implements OnInit, OnChanges, OnDestroy {
  // all of these will be instance properties
  @Input() public title: string;
  @Input() public body: string;
  @Input() public icon: string;
  @Input() public sound: string;
  @Input() public data: any;
  @Input() public tag: string;
  @Input() public dir: string = 'auto';
  @Input() public lang: string = 'en-US';
  @Input() public renotify: boolean = false;
  @Input() public sticky: boolean = false;
  @Input() public vibrate: Array<number>;
  @Input() public noscreen: boolean = false;
  @Input() public silent: boolean = true;
  @Input() public closeDelay: number = 0;

  // all of these will be instance properties
  @Output('load') public onLoad: EventEmitter<any> = new EventEmitter();
  @Output('show') public onShow: EventEmitter<any> = new EventEmitter();
  @Output('close') public onClose: EventEmitter<any> = new EventEmitter();
  @Output('error') public onError: EventEmitter<any> = new EventEmitter();
  @Output('action') public onClick: EventEmitter<any> = new EventEmitter();

  // all methods below will be prototype properties
  public checkCompatibility() {
    return !!('Notification' in window);
  }

  public isPermissionGranted(permission) {
    return permission === 'granted';
  }

  public requestPermission(callback) {
    return Notification.requestPermission(callback);
  }

  public show() {
    if (!this.checkCompatibility()) {
      return console.log('Notification API not available in this browser.');
    }
    return this.requestPermission(permission => {
      if (this.isPermissionGranted(permission)) {
        this.createNotification();
      }
    });
  }

  public createNotification() {
    let notification = new Notification(this.title, {
      dir: this.dir,
      lang: this.lang,
      data: this.data,
      tag: this.tag,
      body: this.body,
      icon: this.icon,
      silent: this.silent,
      sound: this.sound,
      renotify: this.renotify,
      sticky: this.sticky,
      vibrate: this.vibrate,
      noscreen: this.noscreen
    });
    this.attachEventHandlers(notification);
    this.close(notification);
    return notification;
  }

  public close(notification): void {
    if (this.closeDelay) {
      setTimeout(() => {
        notification.close();
      }, this.closeDelay);
    } else {
      notification.close();
    }
  }

  public closeAll(): void {
    // Notification.close();
  }

  attachEventHandlers(notification): void {
    notification.onshow = () => {
      this.onShow.emit({notification});
    };

    notification.onclick = event => {
      this.onClick.emit({event, notification});
    };

    notification.onerror = () => {
      this.onError.emit({notification});
    };

    notification.onclose = () => {
      this.onClose.emit({notification});
    };
  }

  public ngOnInit(): void {
    this.onLoad.emit({});
  }

  public ngOnDestroy(): void {
    this.closeAll();
  }

  public ngOnChanges(): void {
  }
}
