import { appInternalizationConfig } from '@project-management-app/config';
import { LocaleName } from '@project-management-app/enums';
import { isAppLocale } from '@project-management-app/helpers';
import { ParsedAppPathname } from '@project-management-app/types';

const parseAppPathname = (rawPathname: string): ParsedAppPathname => {
  // [{locale}, {...pathChunks}] or [{...pathChunks}]
  const pathChunks = rawPathname.split('/').slice(1);
  const firstChunk = pathChunks[0];

  // Is first chunk a locale
  const hasPathLocale = isAppLocale(firstChunk);
  const pathLocale = hasPathLocale ? firstChunk : LocaleName.DEFAULT;
  const locale = hasPathLocale
    ? firstChunk
    : appInternalizationConfig.defaultLocale;

  // Array of path chunks without locale
  const appPathChunks = hasPathLocale ? pathChunks.slice(1) : pathChunks;
  const appPathname = `/${appPathChunks.join('/')}`;

  return {
    rawPathname,
    appPathname,
    pathLocale,
    locale,
  };
};

export { parseAppPathname };
