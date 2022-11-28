import classNames from 'classnames';
import { FC } from 'react';
import Cookies from 'js-cookie';

import { Button, Dropdown, Icon } from '@project-management-app/components';
import {
  changeLocale,
  getLanguageFromLocale,
} from '@project-management-app/helpers';
import { useAppRouter } from '@project-management-app/hooks';
import { AppLocale, ObjectOption } from '@project-management-app/types';
import { CookieName } from '@project-management-app/enums';

import { headerDictionary } from '../../header.dictionary';
import classes from './menu.module.scss';

type Props = {
  isMobile: boolean;
  isAuthorized: boolean;
  handleSearchClick: () => void;
};

const Menu: FC<Props> = ({ isMobile, isAuthorized, handleSearchClick }) => {
  const router = useAppRouter();
  const { locale, locales } = router;
  const contentMap = headerDictionary.getContentMap({ locale });

  const localeOptions: ObjectOption<AppLocale>[] = locales.map((locale) => ({
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
    router.refresh();
    router.push('/');
  };

  const buttonsSize = isMobile ? 'l' : 's';

  return (
    <nav
      className={classNames(classes.menu, {
        [classes.menu_mobile]: isMobile,
      })}
    >
      <div className={classes.group}>
        {isAuthorized && (
          <>
            <Button href="/boards" size={buttonsSize} variant="text">
              {contentMap.boards}
            </Button>
            <Button href="/profile" size={buttonsSize} variant="text">
              {contentMap.profile}
            </Button>
          </>
        )}
      </div>
      <div className={classes.group}>
        {isAuthorized && (
          <>
            <Button
              symmetricPadding
              variant="text"
              size={buttonsSize}
              onClick={handleSearchClick}
              startIcon={isMobile && <Icon.SearchLine />}
            >
              {isMobile ? 'Search' : <Icon.SearchLine size={18} />}
            </Button>
            <div className={classes.separator} />
          </>
        )}
        {locale && (
          <Dropdown
            handleChange={handleChangeLocale}
            options={localeOptions}
            trigger={
              <Button
                variant="text"
                size={buttonsSize}
                startIcon={<Icon.GlobalLine />}
                endIcon={<Icon.ArrowDropDownLine />}
              >
                {getLanguageFromLocale(locale)}
              </Button>
            }
            alignment="end"
            direction="down"
            size={buttonsSize}
          />
        )}
        <div className={classes.separator} />
        {isAuthorized ? (
          <Button variant="ghost" size={buttonsSize} onClick={handleLogOut}>
            {contentMap.logOut}
          </Button>
        ) : (
          <>
            <Button href="/sign-up" size={buttonsSize} variant="text">
              {contentMap.signUp}
            </Button>
            <Button variant="contained" size={buttonsSize} href="/sign-in">
              {contentMap.signIn}
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export { Menu };
