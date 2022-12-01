import { FC, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import classNames from 'classnames';

import {
  Button,
  Dropdown,
  Icon,
  Options,
} from '@project-management-app/components';
import {
  changeLocale,
  getLanguageFromLocale,
} from '@project-management-app/helpers';
import {
  useAppRouter,
  useMediaQuery,
  useTheme,
} from '@project-management-app/hooks';
import { AppLocale, ObjectOption } from '@project-management-app/types';
import { CookieName, ThemeName } from '@project-management-app/enums';

import classes from './menu.module.scss';
import { headerDictionary } from 'widgets/header/header.dictionary';
import { getThemeDisplayName } from 'widgets/header/helpers/helpers';

type Props = {
  isAuthorized: boolean;
  handleSearchClick: () => void;
  isOpen: boolean;
};

const Menu: FC<Props> = ({ isAuthorized, handleSearchClick, isOpen }) => {
  const router = useAppRouter();
  const { locale, locales } = router;
  const contentMap = headerDictionary.getContentMap({ locale });
  const { theme, setTheme, themes } = useTheme();
  const [buttonsSize, setButtonsSize] = useState<'l' | 's'>('s');
  const { isMatch: isMobile, isLoaded } = useMediaQuery('(max-width: 900px)');

  const localeOptions: ObjectOption<AppLocale>[] = locales.map((locale) => ({
    name: getLanguageFromLocale(locale),
    value: locale,
  }));
  const themeOptions: ObjectOption<ThemeName>[] = themes.map((theme) => ({
    name: getThemeDisplayName(theme, locale),
    value: theme,
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

  useEffect(() => {
    setButtonsSize(isMobile ? 'l' : 's');
  }, [isMobile]);

  return (
    <nav
      className={classNames(classes.menu, {
        [classes.menu_open]: isOpen,
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
              startIcon={isMobile && isLoaded && <Icon.SearchLine />}
            >
              {isMobile && isLoaded ? 'Search' : <Icon.SearchLine size={18} />}
            </Button>
            <div className={classes.separator} />
          </>
        )}
        <Dropdown
          trigger={
            <Button
              variant="text"
              size={buttonsSize}
              startIcon={<Icon.BrushLine />}
              endIcon={<Icon.ArrowDropDownLine />}
            >
              {getThemeDisplayName(theme, locale)}
            </Button>
          }
          alignment="end"
          direction="down"
        >
          <Options
            handleChange={setTheme}
            options={themeOptions}
            size={buttonsSize}
          />
        </Dropdown>
        <div className={classes.separator} />
        {locale && (
          <>
            <Dropdown
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
            >
              <Options
                handleChange={handleChangeLocale}
                size={buttonsSize}
                options={localeOptions}
              />
            </Dropdown>
            <div className={classes.separator} />
          </>
        )}

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
