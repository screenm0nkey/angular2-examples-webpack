import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template: `
    <todo-container></todo-container>
  `
})
export class InsertAppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'da']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }
}
