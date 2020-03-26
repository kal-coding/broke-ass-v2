import { 
  postGetAllAction,
  postSaveAction 
} from '../controllers/user';

/**
 * All application routes.
 */
export const UserRoutes = [
  {
    path: '/posts',
    method: 'get',
    action: postGetAllAction
  },
  {
    path: '/posts',
    method: 'post',
    action: postSaveAction
  }
];
