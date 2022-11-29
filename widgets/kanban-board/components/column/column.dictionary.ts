import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const columnDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    newTask: 'New task',
  },
  [LocaleName.RU]: {
    newTask: 'Новое задание',
  },
  [LocaleName.UK]: {
    newTask: 'Нове завдання',
  },
  [LocaleName.CS]: {
    newTask: 'Nový úkol',
  },
});

export { columnDictionary };
