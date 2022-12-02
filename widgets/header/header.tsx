'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { AppLink, Button, Icon } from '@project-management-app/components';
import {
  useAppRouter,
  useBooleanState,
  useOutsideClick,
  useOutsideFocus,
  useTheme,
} from '@project-management-app/hooks';
import { ThemeName } from '@project-management-app/enums';
import { SearchModal } from '@project-management-app/widgets';
import LogoDarkImg from '@project-management-app/images/logo_dark.png';
import LogoImg from '@project-management-app/images/logo.png';

import classes from './header.module.scss';
import { Menu } from './components/components';

type Props = {
  isAuthorized: boolean;
};

const Header: FC<Props> = ({ isAuthorized }) => {
  const [isSearchModalOpen, isSearchModalOpenActions] = useBooleanState(false);
  const [isMenuOpen, isMenuOpenActions] = useBooleanState(false);
  const register = useOutsideFocus(isMenuOpenActions.setFalse);
  const headerRef = useRef<HTMLElement>(null);
  const { resolvedTheme } = useTheme();
  const router = useAppRouter();

  const isDarkTheme = resolvedTheme === ThemeName.DARK;

  const logoSrc = isDarkTheme ? LogoDarkImg : LogoImg;

  useEffect(
    () => isMenuOpenActions.setFalse,
    [isMenuOpenActions.setFalse, router.appPathname, router.searchParams]
  );

  useOutsideClick(headerRef, isMenuOpenActions.setFalse);

  return (
    <>
      <header {...register} className={classes.header} ref={headerRef}>
        <div className={classes.container}>
          <AppLink href="/">
            <Image src={logoSrc} alt="logo" priority className={classes.logo} />
          </AppLink>
          <div className={classes.menuButton}>
            <Button
              symmetricPadding
              size="s"
              variant="text"
              onClick={isMenuOpenActions.toggle}
            >
              {isMenuOpen ? (
                <Icon.CloseLine size={20} />
              ) : (
                <Icon.MenuLine size={20} />
              )}
            </Button>
          </div>
          <Menu
            isAuthorized={isAuthorized}
            handleSearchClick={isSearchModalOpenActions.setTrue}
            isOpen={isMenuOpen}
          />
        </div>
      </header>
      {isAuthorized && (
        <SearchModal
          isOpen={isSearchModalOpen}
          handleClose={isSearchModalOpenActions.setFalse}
        />
      )}
    </>
  );
};

export { Header };
