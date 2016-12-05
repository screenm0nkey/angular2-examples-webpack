import {Component} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <h1>Welcome!</h1>
    <button (click)="goToProduct(id)">Go to About</button>
  `
})
export class HomeComponent {
  id: number = 1;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['../', id], {relativeTo: this.route});
  }
}
