import { LocaleName } from '@project-management-app/enums';

import { AppRouterFunctions } from '../app-router-functions/app-router-functions.type';
import { ParsedAppPathname } from '../parsed-app-pathname/parsed-app-pathname';

type AppRouter = AppRouterFunctions &
  ParsedAppPathname & {
    locales: LocaleName[];
  };

export type { AppRouter };
