import { AppLocale } from '@project-management-app/types';

class ContentDictionary<T> {
  constructor(
    private dictionary: {
      [Key in `${AppLocale}`]: T;
    }
  ) {}

  getContentMap({ locale }: { locale: AppLocale }) {
    return this.dictionary[locale];
  }
}

export { ContentDictionary };
