import { 
  tagGetAllAction,
  tagSaveAction 
} from '../controllers/tag';

/**
 * All application routes.
 */
export const TagRoutes = [
  {
    path: '/tags',
    method: 'get',
    action: tagGetAllAction
  },
  {
    path: '/tags',
    method: 'post',
    action: tagSaveAction
  }
];
