import { 
  userGetAllAction,
  userSaveAction 
} from '../controllers/user';

/**
 * All application routes.
 */
export const UserRoutes = [
  {
    path: '/users',
    method: 'get',
    action: userGetAllAction
  },
  {
    path: '/users',
    method: 'post',
    action: userSaveAction
  }
];
