import {Component} from '@angular/core';

@Component({
  selector: 'use-ngif',
  template: `
    <p class='path'>misc-examples/components/tips/use-ngIf-to-hide.ts</p>
    <h4>Use *ngIf rather than binding to the [hidden] property</h4>

    <p>At first glance, binding to the hidden property seems like the closest cousin to Angular 1's ng-show.
      However, there is one '!important' difference.</p>

    <p>ng-show and ng-hide both manage visibility by toggling an 'ng-hide' CSS class on the element,
      which simply sets the display property to 'none' when applied.
      Crucially, Angular controls this style and postscripts it with '!important' to ensure it always overrides any
      other
      display styles set on that element.</p>

    <p>On the other hand, the 'display: none' styles attached to the native hidden property are implemented by the
      browser.
      Most browsers do so without an '!important' postscript. Consequently, the style carries low specificity and can be
      easy to override accidentally. It's as simple as adding any display style to the element you're trying to hide.
      In other words, if you set 'display: flex' on the element in your stylesheet, it will outrank the style set by
      hidden and the element will always be visible.</p>


    <div [hidden]='!showGreeting' style='background: white; padding: 4px;margin-bottom: 20px'>
      This uses the [hidden] property
    </div>

    <p>For this reason, it's often better to toggle an element's presence using *ngIf.</p>

    <p>Unlike the hidden property, Angular's *ngIf directive is not subject to style specificity constraints. It's
      always safe to use regardless of your stylesheet. However, it's worth noting that it's not functionally
      equivalent. Rather than toggling the display property, it works by adding and removing template elements from the
      DOM.</p>

    <div *ngIf='showGreeting' style='background: white; padding: 4px;'>
      This uses ngIf='showGreeting'
    </div>
  `
})
export class UseNgIfComponent {
  showGreeting: boolean = true;
}
