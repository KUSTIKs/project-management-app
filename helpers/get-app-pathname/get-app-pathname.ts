import { appInternalizationConfig } from '@project-management-app/config';
import { isAppLocale, parseAppPathname } from '@project-management-app/helpers';

type GetAppPathnameParams = {
  pathname: string;
  locale?: string | false;
};

const getAppPathname = ({
  pathname: rawPathname,
  locale,
}: GetAppPathnameParams) => {
  const { appPathname } = parseAppPathname(rawPathname);
  const isValidLocale = isAppLocale(locale);
  const isDefaultLocale = locale === appInternalizationConfig.defaultLocale;

  if (locale === false || isDefaultLocale) {
    return appPathname;
  }

  if (isValidLocale) {
    return `/${locale}${appPathname}`;
  }

  return rawPathname;
};

export { getAppPathname };
