'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { AppLink, Button, Icon } from '@project-management-app/components';
import {
  useAppRouter,
  useBooleanState,
  useMediaQuery,
  useOutsideClick,
} from '@project-management-app/hooks';

import classes from './header.module.scss';
import { Menu } from './components/components';

type Props = {
  isAuthorized: boolean;
};

const Header: FC<Props> = ({ isAuthorized }) => {
  const [isMenuOpen, isMenuOpenActions] = useBooleanState(false);
  const isMobile = useMediaQuery('(max-width: 800px)');
  const headerRef = useRef<HTMLElement>(null);
  const { appPathname } = useAppRouter();

  useOutsideClick(headerRef, isMenuOpenActions.setFalse);

  useEffect(() => {
    isMenuOpenActions.setFalse();
  }, [appPathname, isMenuOpenActions]);

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.container}>
        <AppLink href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={173}
            height={24}
            priority
            className={classes.logo}
          />
        </AppLink>
        {isMobile && (
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
        )}
        {!(isMobile && !isMenuOpen) && (
          <Menu isAuthorized={isAuthorized} isMobile={isMobile} />
        )}
      </div>
    </header>
  );
};

export { Header };
