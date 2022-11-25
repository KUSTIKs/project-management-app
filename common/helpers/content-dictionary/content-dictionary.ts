import { AppLocale } from '@project-management-app/types';

type Dict<T> = {
  [Key in `${AppLocale}`]: T;
};

class ContentDictionary<T> {
  dictionary: Dict<T>;

  constructor(dictionary: Dict<T>) {
    this.dictionary = dictionary;
  }

  getContentMap({ locale }: { locale: AppLocale }) {
    return this.dictionary[locale];
  }
}

export { ContentDictionary };
