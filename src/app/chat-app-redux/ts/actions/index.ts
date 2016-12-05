import * as ThreadActions from './ThreadActions';
import * as UserActions from './UserActions';

// export here for object imports
export {
  ThreadActions,
  UserActions
};

// export here for injecting the dependencies (e.g. at bootstrap)
export default [
  ThreadActions,
  UserActions
];
