'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Dropdown, Icon } from '@project-management-app/components';
import { getLanguageFromLocale } from '@project-management-app/helpers';
import { ObjectOption } from '@project-management-app/types';

import { NavItem } from './subcomponents/subcomponents';
import classes from './header.module.scss';

type Props = {
  isAuthorized: boolean;
};

const locales = ['English', 'Russian'];

const Header: FC<Props> = ({ isAuthorized }) => {
  const [locale, setLocale] = useState(locales[0]);

  const localeOptions: ObjectOption[] = locales.map((locale) => ({
    name: getLanguageFromLocale(locale),
    value: locale,
  }));

  const handleChangeLocale = (newLocale: string) => {
    // changeLocale({
    //   locale: newLocale,
    //   router,
    // });
    setLocale(newLocale);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.group}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={173}
              height={24}
              priority
            />
          </Link>
          {isAuthorized && (
            <>
              <NavItem href="/boards">Boards</NavItem>
              <NavItem href="/profile">Profile</NavItem>
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
                  {locale}
                </Button>
              }
              alignment="end"
              direction="down"
            />
          )}

          <div className={classes.separator} />
          {isAuthorized ? (
            <Button variant="text" size="s">
              Log out
            </Button>
          ) : (
            <>
              <NavItem href="/sign-up">Sign up</NavItem>
              <NavItem variant="contained" href="/log-in">
                Log in
              </NavItem>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
