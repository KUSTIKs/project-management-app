'use client';

import { FC } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';

import {
  AppLink,
  Button,
  Dropdown,
  Icon,
} from '@project-management-app/components';
import {
  changeLocale,
  getLanguageFromLocale,
} from '@project-management-app/helpers';
import { ObjectOption } from '@project-management-app/types';
import { useAppRouter } from '@project-management-app/hooks';
import { CookieName } from '@project-management-app/enums';

import { NavItem } from './subcomponents/subcomponents';
import classes from './header.module.scss';
import { headerDictionary } from './header.dictionary';

type Props = {
  isAuthorized: boolean;
};

const Header: FC<Props> = ({ isAuthorized }) => {
  const router = useAppRouter();
  const { locale, locales } = router;
  const contentMap = headerDictionary.getContentMap(locale);

  const localeOptions: ObjectOption[] = locales.map((locale) => ({
    name: getLanguageFromLocale(locale),
    value: locale,
  }));

  const handleChangeLocale = (newLocale: string) => {
    changeLocale({
      locale: newLocale,
      router,
    });
  };

  const handleLogOut = () => {
    Cookies.remove(CookieName.NEXT_TOKEN);
    router.push('/');
    router.refresh();
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.group}>
          <AppLink href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={173}
              height={24}
              priority
            />
          </AppLink>
          {isAuthorized && (
            <>
              <NavItem href="/boards">{contentMap.boards}</NavItem>
              <NavItem href="/profile">{contentMap.profile}</NavItem>
            </>
          )}
        </div>
        <div className={classes.group}>
          {locale && (
            <Dropdown
              handleChange={handleChangeLocale}
              options={localeOptions}
              trigger={
                <Button
                  variant="text"
                  size="s"
                  startIcon={<Icon.GlobalLine />}
                  endIcon={<Icon.ArrowDropDownLine />}
                >
                  {getLanguageFromLocale(locale)}
                </Button>
              }
              alignment="end"
              direction="down"
            />
          )}

          <div className={classes.separator} />
          {isAuthorized ? (
            <Button variant="text" size="s" onClick={handleLogOut}>
              {contentMap.logOut}
            </Button>
          ) : (
            <>
              <NavItem href="/sign-up">{contentMap.signUp}</NavItem>
              <NavItem variant="contained" href="/sign-in">
                {contentMap.signIn}
              </NavItem>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
