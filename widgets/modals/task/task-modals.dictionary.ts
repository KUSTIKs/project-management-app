import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const taskModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    assignedTo: 'assigned to',
    createTask: 'Create task',
    updateTask: 'Update task',
    deleteTask: 'Delete task',
    infoTask: 'Task info',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    assignedTo: 'назначенно на',
    createTask: 'Создать задание',
    updateTask: 'Обновить задание',
    deleteTask: 'Удалить задание',
    infoTask: 'Информация о задании',
  },
  [LocaleName.UK]: {
    title: 'заголовок',
    description: 'опис',
    assignedTo: 'призначено на',
    createTask: 'Створити завдання',
    updateTask: 'Оновити завдання',
    deleteTask: 'Видалити завдання',
    infoTask: 'Інформація про завдвння',
  },
  [LocaleName.CS]: {
    title: 'titulek',
    description: 'popis',
    assignedTo: 'přiřazeno k',
    deleteTask: 'Smazat úkol',
    createTask: 'Vytvořit úkol',
    updateTask: 'Aktualizovat úkol',
    infoTask: 'Informace o úkolu',
  },
});

export { taskModalsDictionary };
