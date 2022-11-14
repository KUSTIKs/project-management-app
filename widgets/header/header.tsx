import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Icon } from '@project-management-app/components';

import { NavItem } from './subcomponents/subcomponents';
import classes from './header.module.scss';

type Props = {
  isAuthorized: boolean;
};

const Header: FC<Props> = ({ isAuthorized }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.group}>
          <Link href="/">
            <Image src="logo.png" alt="logo" width={173} height={24} priority />
          </Link>
          {isAuthorized && (
            <>
              <NavItem href="/boards">Boards</NavItem>
              <NavItem href="/profile">Profile</NavItem>
            </>
          )}
        </div>
        <div className={classes.group}>
          <Button
            variant="text"
            size="s"
            startIcon={<Icon.GlobalLine />}
            endIcon={<Icon.ArrowDropDownLine />}
          >
            English
          </Button>
          <div className={classes.separator} />
          {isAuthorized ? (
            <Button variant="text" size="s">
              Log out
            </Button>
          ) : (
            <>
              <Button variant="text" size="s">
                Sign up
              </Button>
              <Button variant="contained" size="s">
                Log in
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
