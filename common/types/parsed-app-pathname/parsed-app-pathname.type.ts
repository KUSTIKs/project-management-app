import { LocaleName } from '@project-management-app/enums';

import { AppLocale } from '../app-locale/app-locale.type';

type ParsedAppPathname = {
  rawPathname: string;
  appPathname: string;
  pathLocale: LocaleName;
  locale: AppLocale;
};

export type { ParsedAppPathname };
