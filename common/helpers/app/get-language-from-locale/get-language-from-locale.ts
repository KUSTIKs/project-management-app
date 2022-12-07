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
    if (locale === LocaleName.CS) {
      return 'Czech';
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
    if (locale === LocaleName.CS) {
      return 'Чешский';
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
    if (locale === LocaleName.CS) {
      return 'Чеська';
    }
  }

  if (userLocale === LocaleName.CS) {
    if (locale === LocaleName.EN) {
      return 'Angličtina';
    }
    if (locale === LocaleName.RU) {
      return 'Ruština';
    }
    if (locale === LocaleName.UK) {
      return 'Ukrajinština';
    }
    if (locale === LocaleName.CS) {
      return 'Čeština';
    }
  }

  return locale;
};

export { getLanguageFromLocale };
