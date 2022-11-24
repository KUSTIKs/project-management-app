import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const createEntityModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    create: 'Create',
  },
  [LocaleName.RU]: {
    create: 'Создать',
  },
  [LocaleName.UK]: {
    create: 'Створити',
  },
});

export { createEntityModalDictionary };
