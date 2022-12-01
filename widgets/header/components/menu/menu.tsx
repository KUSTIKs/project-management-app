import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import Cookies from 'js-cookie';

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

import { headerDictionary } from '../../header.dictionary';
import { getThemeDisplayName } from '../../helpers/helpers';
import classes from './menu.module.scss';

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
  const mobileQuery = useMediaQuery('(max-width: 900px)');

  const { isLoaded } = mobileQuery;
  const isMobile = mobileQuery.isLoaded && mobileQuery.isMatch;

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
    router.push('/');
    router.refresh();
  };

  useEffect(() => {
    setButtonsSize(isMobile ? 'l' : 's');
  }, [isMobile]);

  console.log({ isMobile });

  const menuContent = (
    <>
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
    </>
  );

  if (isMobile) {
    return (
      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.nav
            className={classNames(classes.menu, {
              [classes.menu_loaded]: isLoaded,
            })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              duration: 0.3,
            }}
          >
            {menuContent}
          </motion.nav>
        )}
      </AnimatePresence>
    );
  }

  return <nav className={classes.menu}>{menuContent}</nav>;
};

export { Menu };
