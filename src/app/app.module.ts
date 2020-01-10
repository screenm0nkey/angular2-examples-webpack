import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {PageNotFoundComponent} from './not-found.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

// this is for the angular2 services example
import {SharedModule} from './shared/_shared.module';
import {ComposeMessageComponent} from "./misc-mini-apps/auth/components/compose-message.component";

const config: SocketIoConfig = {url: 'http://localhost:1970', options: {}};

@NgModule({
  // modules only need to be imported if they are not lazy loaded
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}, // is the equivalent of using <base href='/'>
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    // loading dependencies example
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
}
