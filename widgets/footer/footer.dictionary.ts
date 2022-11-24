import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const footerDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    copyText: 'all rights reserved',
  },
  [LocaleName.RU]: {
    copyText: 'все права защищены',
  },
  [LocaleName.UK]: {
    copyText: 'всі права захищені',
  },
});

export { footerDictionary };
