/**
 * This file is longer necessary as we're using providedIn to
 */
import {messagesService} from './MessagesService';
import {threadsService} from './ThreadsService';
import {userService} from './UserService';

export * from './MessagesService';
export * from './ThreadsService';
export * from './UserService';

export const servicesInjectables: Array<any> = [
  messagesService,
  threadsService,
  userService
];
