import { 
  categoryGetAllAction,
  categorySaveAction 
} from '../controllers/category';

/**
 * All application routes.
 */
export const CategoryRoutes = [
  {
    path: '/categories',
    method: 'get',
    action: categoryGetAllAction
  },
  {
    path: '/categories',
    method: 'post',
    action: categorySaveAction
  }
];
