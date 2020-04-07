import { UserRoutes } from "./user";

import { TagRoutes } from './tag';
import { CategoryRoutes } from './category';
import { SubCategoryRoutes } from './subcategory';


// All application routes.

export const AppRoutes = [
   ...TagRoutes,
   ...CategoryRoutes,
   ...SubCategoryRoutes,
   ... UserRoutes
];