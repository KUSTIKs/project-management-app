import { LocaleName } from '@project-management-app/enums';

type ParsedAppPathname = {
  rawPathname: string;
  appPathname: string;
  pathLocale: LocaleName;
  locale: LocaleName;
};

export type { ParsedAppPathname };
