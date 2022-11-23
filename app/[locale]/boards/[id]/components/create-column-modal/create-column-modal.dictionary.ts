import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const createColumnModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    createColumn: 'Create column',
    title: 'title',
  },
  [LocaleName.RU]: {
    createColumn: 'Создать колонку',
    title: 'заголовок',
  },
});

export { createColumnModalDictionary };
