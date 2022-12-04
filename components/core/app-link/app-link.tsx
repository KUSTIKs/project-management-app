'use client';

import { FC, ComponentProps } from 'react';
import Link from 'next/link';

import { getAppPathname } from '@project-management-app/helpers';
import { useAppRouter } from '@project-management-app/hooks';

type Props = ComponentProps<typeof Link>;

const AppLink: FC<Props> = (linkProps) => {
  const { href } = linkProps;
  const stringHref = href.toString();
  const router = useAppRouter();

  if (stringHref.startsWith('http://') || stringHref.startsWith('https://')) {
    return <Link {...linkProps} />;
  }

  const locale = linkProps.locale || router.locale;

  const appHref = getAppPathname({
    pathname: stringHref,
    locale,
  });

  return <Link {...linkProps} href={appHref} locale={false} />;
};

export { AppLink };
