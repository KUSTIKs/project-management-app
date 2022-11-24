import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const taskModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    update: 'Update',
    delete: 'Delete',
    createTask: 'Create task',
    updateTask: 'Update task',
    deleteTask: 'Delete task',
    infoTask: 'Task info',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    update: 'Обновить',
    delete: 'Удалить',
    createTask: 'Создать задание',
    updateTask: 'Обновить задание',
    deleteTask: 'Удалить задание',
    infoTask: 'Информация о задании',
  },
  [LocaleName.UK]: {
    title: 'заголовок',
    description: 'опис',
    update: 'Оновити',
    delete: 'Видалити',
    createTask: 'Створити завдання',
    updateTask: 'Оновити завдання',
    deleteTask: 'Видалити завдання',
    infoTask: 'Інформация про завдвння',
  },
});

export { taskModalsDictionary };
