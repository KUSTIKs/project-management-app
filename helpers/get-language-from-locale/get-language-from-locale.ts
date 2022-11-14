import { LocaleName } from '@project-management-app/enums';

const getLanguageFromLocale = (locale: string) => {
  switch (locale) {
    case LocaleName.EN:
      return 'English';
    case LocaleName.RU:
      return 'Russian';
    default:
      return locale;
  }
};

export { getLanguageFromLocale };
