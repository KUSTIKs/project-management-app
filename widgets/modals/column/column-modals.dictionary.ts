import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const columnModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    createColumn: 'Create column',
    updateColumn: 'Update column',
    deleteColumn: 'Delete column',
    infoColumn: 'Column info',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    createColumn: 'Создать колонку',
    updateColumn: 'Обновить колонку',
    deleteColumn: 'Удалить колонку',
    infoColumn: 'Информация о колонке',
  },
  [LocaleName.UK]: {
    title: 'заголовок',
    createColumn: 'Створити колонку',
    updateColumn: 'Оновити колонку',
    deleteColumn: 'Видалити колонку',
    infoColumn: 'Інформація про колонку',
  },
  [LocaleName.CS]: {
    title: 'titulek',
    createColumn: 'Vytvořit sloupec',
    updateColumn: 'Aktualizovat sloupec',
    deleteColumn: 'Smazat sloupec',
    infoColumn: 'Informace o sloupci',
  },
});

export { columnModalsDictionary };
