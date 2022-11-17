import { LocaleName } from '@project-management-app/enums';
import { AppLocale } from '@project-management-app/types';

const getLanguageFromLocale = (locale: string, userLocale: AppLocale) => {
  if (userLocale === LocaleName.EN) {
    if (locale === LocaleName.EN) {
      return 'English';
    }
    if (locale === LocaleName.RU) {
      return 'Russian';
    }
  }

  if (userLocale === LocaleName.RU) {
    if (locale === LocaleName.EN) {
      return 'Английский';
    }
    if (locale === LocaleName.RU) {
      return 'Русский';
    }
  }

  return locale;
};

export { getLanguageFromLocale };
