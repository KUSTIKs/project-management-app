import { LocaleName } from '@project-management-app/enums';

const getLanguageFromLocale = (locale: string, userLocale = locale) => {
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
