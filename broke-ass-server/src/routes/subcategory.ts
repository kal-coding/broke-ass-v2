import { 
  subCategoryGetAllAction,
  subCategorySaveAction 
} from '../controllers/subcategory';

/**
 * All application routes.
 */
export const SubCategoryRoutes = [
  {
    path: '/subCategories',
    method: 'get',
    action: subCategoryGetAllAction
  },
  {
    path: '/subCategories',
    method: 'post',
    action: subCategorySaveAction
  }
];
