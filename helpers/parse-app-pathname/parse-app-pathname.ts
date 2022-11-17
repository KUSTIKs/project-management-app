import { appInternalizationConfig } from '@project-management-app/config';
import { LocaleName } from '@project-management-app/enums';
import { ParsedAppPathname } from '@project-management-app/types';

const parseAppPathname = (rawPathname: string): ParsedAppPathname => {
  // [{locale}, {...pathChunks}] or [{...pathChunks}]
  const pathChunks = rawPathname.split('/').slice(1);
  const firstChunk = pathChunks[0];

  // Is first chunk a locale
  const hasPathLocale = appInternalizationConfig.locales.includes(
    firstChunk as LocaleName
  );
  const pathLocale = hasPathLocale
    ? (firstChunk as LocaleName)
    : LocaleName.DEFAULT;
  const locale =
    pathLocale === LocaleName.DEFAULT
      ? appInternalizationConfig.defaultLocale
      : pathLocale;

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
