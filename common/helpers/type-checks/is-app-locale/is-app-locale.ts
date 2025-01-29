import { appInternalizationConfig } from '@project-management-app/config';
import { AppLocale } from '@project-management-app/types';

const isAppLocale = (locale: unknown): locale is AppLocale => {
  return appInternalizationConfig.locales.includes(locale as AppLocale);
};

export { isAppLocale };
