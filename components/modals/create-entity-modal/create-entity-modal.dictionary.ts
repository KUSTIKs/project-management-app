import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const createEntityModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    create: 'Create',
    board: 'board',
  },
  [LocaleName.RU]: {
    create: 'Создать',
    board: 'доска',
  },
});

export { createEntityModalDictionary };
