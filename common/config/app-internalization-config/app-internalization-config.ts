import { LocaleName } from '@project-management-app/enums';
import {
  AppLocale,
  InternalizationConfig,
} from '@project-management-app/types';

const appInternalizationConfig: InternalizationConfig<AppLocale> = {
  locales: [LocaleName.EN, LocaleName.RU, LocaleName.UK],
  defaultLocale: LocaleName.EN,
};

export { appInternalizationConfig };
