import { NextResponse, NextRequest } from 'next/server';

import { appInternalizationConfig } from '@project-management-app/config';
import { CookieName, LocaleName } from '@project-management-app/enums';
import { parseAppPathname } from '@project-management-app/helpers';

const publicFileRegExp = /\.(.*)$/;

const isRoute = ({ nextUrl }: NextRequest) => {
  return (
    nextUrl.pathname.startsWith('/_next') ||
    nextUrl.pathname.includes('/api/') ||
    publicFileRegExp.test(nextUrl.pathname)
  );
};

const detectLocale = ({ headers }: NextRequest) => {
  const detectedLanguage = headers
    .get('accept-language')
    ?.split(',')[0]
    .split('-')[0]
    .toLowerCase();
  const isValidAppLocale = appInternalizationConfig.locales.includes(
    detectedLanguage as LocaleName
  );
  const detectedLocale = isValidAppLocale
    ? (detectedLanguage as LocaleName)
    : appInternalizationConfig.defaultLocale;

  return detectedLocale;
};

const isAppLocale = (locale: string) => {
  return appInternalizationConfig.locales.includes(locale as LocaleName);
};

const middleware = (request: NextRequest) => {
  const { nextUrl, cookies } = request;

  if (isRoute(request)) return;

  //* /{locale}/{...pathChunks} or /{...pathChunks}

  const url = nextUrl.clone();

  const { appPathname, pathLocale } = parseAppPathname(url.pathname);
  const isDefaultPathLocale = pathLocale === LocaleName.DEFAULT;

  // Stored locale
  const nextLocale = cookies.get(CookieName.NEXT_LOCALE)?.value;
  const isValidNextLocale = !!nextLocale && isAppLocale(nextLocale);
  const isDefaultNextLocale =
    nextLocale === appInternalizationConfig.defaultLocale;

  if (isValidNextLocale && isDefaultPathLocale) {
    url.pathname = `/${nextLocale}${appPathname}`;
    return NextResponse.redirect(url);
  }

  if (isDefaultPathLocale && isDefaultNextLocale) {
    url.pathname = `/${appInternalizationConfig.defaultLocale}${appPathname}`;
    return NextResponse.redirect(url);
  }

  if (!isDefaultPathLocale) return;

  const detectedLocale = detectLocale(request);
  url.pathname = `/${detectLocale}${appPathname}`;

  cookies.set(CookieName.NEXT_LOCALE, detectedLocale);

  return NextResponse.redirect(url);
};

export { middleware };
