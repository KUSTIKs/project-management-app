import { LocaleName } from '@project-management-app/enums';
import { InternalizationConfig } from '@project-management-app/types';

const appInternalizationConfig: InternalizationConfig<LocaleName> = {
  locales: [LocaleName.EN, LocaleName.RU],
  defaultLocale: LocaleName.EN,
};

export { appInternalizationConfig };
