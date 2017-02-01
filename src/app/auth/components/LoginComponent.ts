import {Component} from "@angular/core";
import {AuthService} from "../services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'login',
  template: `
  <div class="alert alert-danger" role="alert" *ngIf="message">
    {{ message }}
  </div>

  <form class="form-inline" *ngIf="!authService.getUser()">
    <div class="form-group">
      <label for="username">User:</label>
      <input class="form-control" name="username" value="user" #username>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input class="form-control" type="password" name="password" value="password" #password>
    </div>

    <a class="btn btn-default" (click)="login(username.value, password.value)">
      Login
    </a>
  </form>

  <div class="well" *ngIf="authService.getUser()">
    Logged in as <b>{{ authService.getUser() }}</b>
    <a href (click)="logout()">Log out</a>
  </div>
  `
})
export class LoginComponent {
  message: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function () {
        this.message = '';
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    if (this.router.url.endsWith('protected')) {
      this.router.navigate(['./aboutus', 34], {relativeTo: this.route});
    }
    return false;
  }
}
