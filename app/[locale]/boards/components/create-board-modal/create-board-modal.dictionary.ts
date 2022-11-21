import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const createBoardModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    create: 'Create',
    createBoard: 'Create board',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    create: 'Создать',
    createBoard: 'Создать доску',
  },
});

export { createBoardModalDictionary };
