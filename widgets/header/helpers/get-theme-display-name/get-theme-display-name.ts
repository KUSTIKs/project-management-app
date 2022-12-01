import { ThemeName } from '@project-management-app/enums';
import { AppLocale } from '@project-management-app/types';

import { getThemeDisplayNameDictionary } from './get-theme-display-name.dictionary';

const getThemeDisplayName = (themeName: ThemeName, locale: AppLocale) => {
  const contentMap = getThemeDisplayNameDictionary.getContentMap({ locale });
  if (themeName === ThemeName.DARK) {
    return contentMap.dark;
  }
  if (themeName === ThemeName.LIGHT) {
    return contentMap.light;
  }
  return contentMap.system;
};

export { getThemeDisplayName };
