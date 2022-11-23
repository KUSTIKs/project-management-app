import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const boardModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    deleteBoard: 'Delete board',
    createBoard: 'Create board',
    updateBoard: 'Update board',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    deleteBoard: 'Удалить доску',
    createBoard: 'Создать доску',
    updateBoard: 'Обновить доску',
  },
});

export { boardModalsDictionary };
