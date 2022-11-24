import { LocaleName } from '@project-management-app/enums';

const getLanguageFromLocale = (locale: string, userLocale = locale) => {
  if (userLocale === LocaleName.EN) {
    if (locale === LocaleName.EN) {
      return 'English';
    }
    if (locale === LocaleName.RU) {
      return 'Russian';
    }
    if (locale === LocaleName.UK) {
      return 'Ukrainian';
    }
  }

  if (userLocale === LocaleName.RU) {
    if (locale === LocaleName.EN) {
      return 'Английский';
    }
    if (locale === LocaleName.RU) {
      return 'Русский';
    }
    if (locale === LocaleName.UK) {
      return 'Украинский';
    }
  }

  if (userLocale === LocaleName.UK) {
    if (locale === LocaleName.EN) {
      return 'Англійська';
    }
    if (locale === LocaleName.RU) {
      return 'Російська';
    }
    if (locale === LocaleName.UK) {
      return 'Українська';
    }
  }

  return locale;
};

export { getLanguageFromLocale };
