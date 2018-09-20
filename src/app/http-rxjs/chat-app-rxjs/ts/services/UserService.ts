import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../models';

/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // BehaviourSubject stores the last value.
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const userService: Array<any> = [UserService];
