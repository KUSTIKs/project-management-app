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
  const { nextUrl, cookies, url: fullUrl } = request;

  if (isRoute(request)) return;

  //* /{locale}/{...pathChunks} or /{...pathChunks}

  const url = nextUrl.clone();

  const { appPathname, pathLocale } = parseAppPathname(url.pathname);
  const isRootPathLocale = pathLocale === LocaleName.DEFAULT;
  const isDefaultPathLocale =
    pathLocale === appInternalizationConfig.defaultLocale;

  // Stored locale
  const nextLocale = cookies.get(CookieName.NEXT_LOCALE)?.value;
  const isValidNextLocale = !!nextLocale && isAppLocale(nextLocale);
  const isDefaultNextLocale =
    nextLocale === appInternalizationConfig.defaultLocale;

  console.log({
    fullUrl,
    appPathname,
    pathLocale,
    nextLocale,
  });

  if (isDefaultNextLocale && isRootPathLocale) {
    const pathname = `/${nextLocale}${appPathname}`;
    return NextResponse.rewrite(new URL(pathname, fullUrl));
  }

  if (isValidNextLocale && isRootPathLocale) {
    const pathname = `/${nextLocale}${appPathname}`;
    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  if (!isValidNextLocale && isRootPathLocale) {
    const detectedLocale = detectLocale(request);

    const pathname = `/${detectedLocale}${appPathname}`;

    cookies.set(CookieName.NEXT_LOCALE, detectedLocale);

    if (detectedLocale === appInternalizationConfig.defaultLocale) {
      return NextResponse.rewrite(new URL(pathname, fullUrl));
    }

    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  if (isDefaultPathLocale) {
    const pathname = appPathname;
    return NextResponse.redirect(new URL(pathname, fullUrl));
  }

  return;
};

export { middleware };
