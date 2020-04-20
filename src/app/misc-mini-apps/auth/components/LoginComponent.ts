import {Component} from '@angular/core';
import {AuthService} from '../services/AuthService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'login-component',
  template: `
    <div style="margin-bottom:10px;">
      <hr>
      <div class='alert alert-danger' role='alert' *ngIf='message'>
        {{ message }}
      </div>

      <highlight *ngIf='!authService.validateUser()'>Sign in and you get access to the hidden content</highlight>


      <form class='form-inline' *ngIf='!authService.validateUser()'>
        <div class='form-group'>
          <label for='username'>User:</label>&nbsp;
          <input class='form-control' name='username' value='lowman' #username>
        </div>

        <div class='form-group'>
          <label for='password'>Password:</label>&nbsp;
          <input class='form-control' type='password' name='password' value='password' #password>
        </div>

        <button class='btn btn-default' (click)='login(username.value, password.value)'>
          Login
        </button>
      </form>

      <div class='well' *ngIf='authService.validateUser()'>
        Logged in as <highlight>{{ authService.validateUser() }}</highlight>&nbsp;
        <button href (click)='logout()'>Click here to Log out</button>
      </div>

      <hr>
    </div>
  `
})
export class LoginComponent {
  message: string = '';

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.';
      setTimeout(() => this.message = '', 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    if (this.router.url.endsWith('public')) {
      this.router.navigate(['./aboutus', 34], {relativeTo: this.route});
    }
    return false;
  }
}
