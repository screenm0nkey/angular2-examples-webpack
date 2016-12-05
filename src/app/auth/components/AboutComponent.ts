import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'about',
  template: `
   <h1>About</h1>
    You selected product: {{ id }}
  `
})
export class AboutComponent {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
