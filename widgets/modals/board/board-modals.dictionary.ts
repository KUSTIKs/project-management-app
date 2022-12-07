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
  [LocaleName.UK]: {
    title: 'заголовок',
    description: 'опис',
    deleteBoard: 'Видалити дошку',
    createBoard: 'Створити дошку',
    updateBoard: 'Оновити дошку',
  },
  [LocaleName.CS]: {
    title: 'titulek',
    description: 'popis',
    deleteBoard: 'Smazat desku',
    createBoard: 'Vytvořit desku',
    updateBoard: 'Aktualizovat desku',
  },
});

export { boardModalsDictionary };
