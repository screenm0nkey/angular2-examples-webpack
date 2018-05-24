import { messagesServiceInjectables } from "./MessagesService";
import { threadsServiceInjectables } from "./ThreadsService";
import { userServiceInjectables } from "./UserService";

export * from "./MessagesService";
export * from "./ThreadsService";
export * from "./UserService";

export const servicesInjectables: Array<any> = [
  messagesServiceInjectables,
  threadsServiceInjectables,
  userServiceInjectables
];
