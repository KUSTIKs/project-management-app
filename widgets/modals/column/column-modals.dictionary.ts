import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const columnModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    update: 'Update',
    delete: 'Delete',
    createColumn: 'Create column',
    updateColumn: 'Update column',
    deleteColumn: 'Delete column',
    infoColumn: 'Column info',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    update: 'Обновить',
    delete: 'Удалить',
    createColumn: 'Создать колонку',
    updateColumn: 'Обновить колонку',
    deleteColumn: 'Удалить колонку',
    infoColumn: 'Информация о колонке',
  },
});

export { columnModalsDictionary };
